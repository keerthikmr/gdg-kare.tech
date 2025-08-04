const { createClient } = require("@supabase/supabase-js");
const { formidable } = require("formidable");
const fs = require("fs");
const path = require("path");

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Missing Supabase environment variables");
}

const supabase = createClient(supabaseUrl, supabaseKey);

export const config = {
  api: {
    bodyParser: false,
  },
};

module.exports = async (req, res) => {
  // Set CORS headers
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // Parse form data
    const form = formidable({
      maxFileSize: 5 * 1024 * 1024, // 5MB
      allowEmptyFiles: false,
    });

    const [fields, files] = await form.parse(req);

    const upiId = Array.isArray(fields.upiId) ? fields.upiId[0] : fields.upiId;
    const transactionId = Array.isArray(fields.transactionId)
      ? fields.transactionId[0]
      : fields.transactionId;
    const registrationId = Array.isArray(fields.registrationId)
      ? fields.registrationId[0]
      : fields.registrationId;
    const paymentProofFile = Array.isArray(files.paymentProof)
      ? files.paymentProof[0]
      : files.paymentProof;

    if (!upiId || !transactionId || !registrationId || !paymentProofFile) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Validate transaction ID is exactly 12 digits
    if (!/^\d{12}$/.test(transactionId)) {
      return res
        .status(400)
        .json({ error: "Transaction ID must be exactly 12 digits" });
    }

    // Verify registration exists
    const { data: registration, error: regError } = await supabase
      .from("nlp_workshop_registrations")
      .select("id, name")
      .eq("id", registrationId)
      .single();

    if (regError || !registration) {
      return res.status(404).json({ error: "Registration not found" });
    }

    // Check if payment already exists
    const { data: existingPayment, error: paymentCheckError } = await supabase
      .from("nlp_payments")
      .select("id")
      .eq("registration_id", registrationId)
      .single();

    if (existingPayment) {
      return res
        .status(400)
        .json({ error: "Payment already submitted for this registration" });
    }

    // Upload file to Supabase Storage
    const fileExtension = path.extname(
      paymentProofFile.originalFilename || paymentProofFile.newFilename
    );
    const fileName = `nlp-payment-${registrationId}-${Date.now()}${fileExtension}`;

    const fileBuffer = fs.readFileSync(paymentProofFile.filepath);

    const { data: uploadData, error: uploadError } = await supabase.storage
      .from("nlp-payment-proofs")
      .upload(fileName, fileBuffer, {
        contentType: paymentProofFile.mimetype,
        upsert: false,
      });

    if (uploadError) {
      console.error("Upload error:", uploadError);
      return res.status(500).json({ error: "Failed to upload payment proof" });
    }

    // Get public URL for the uploaded file
    const { data: urlData } = supabase.storage
      .from("nlp-payment-proofs")
      .getPublicUrl(fileName);

    // Insert payment record
    const { data: paymentData, error: insertError } = await supabase
      .from("nlp_payments")
      .insert({
        registration_id: registrationId,
        upi_id: upiId,
        transaction_id: transactionId,
        payment_proof_url: urlData.publicUrl,
        status: "pending",
        created_at: new Date().toISOString(),
      })
      .select()
      .single();

    if (insertError) {
      console.error("Insert error:", insertError);
      // Clean up uploaded file if database insert fails
      await supabase.storage.from("nlp-payment-proofs").remove([fileName]);

      return res.status(500).json({ error: "Failed to save payment record" });
    }

    // Clean up temporary file
    fs.unlinkSync(paymentProofFile.filepath);

    res.status(200).json({
      message: "Payment submitted successfully",
      paymentId: paymentData.id,
    });
  } catch (error) {
    console.error("Error submitting payment:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
