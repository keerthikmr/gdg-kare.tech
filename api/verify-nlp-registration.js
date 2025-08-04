const { createClient } = require("@supabase/supabase-js");

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Missing Supabase environment variables");
}

const supabase = createClient(supabaseUrl, supabaseKey);

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
    const { registerNumber } = req.body;

    if (!registerNumber) {
      return res.status(400).json({ error: "Registration number is required" });
    }

    // Check if registration exists in nlp_workshop_registrations table
    const { data: registration, error: fetchError } = await supabase
      .from("nlp_workshop_registrations")
      .select("id, name, email, registration_number")
      .eq("registration_number", registerNumber)
      .single();

    if (fetchError || !registration) {
      return res.status(404).json({ error: "Registration not found" });
    }

    // Check if payment already exists for this registration
    const { data: existingPayment } = await supabase
      .from("nlp_payments")
      .select("id")
      .eq("registration_id", registration.id)
      .single();

    if (existingPayment) {
      return res
        .status(400)
        .json({ error: "Payment already submitted for this registration" });
    }

    res.status(200).json({
      id: registration.id,
      name: registration.name,
      email: registration.email,
      registrationNumber: registration.registration_number,
    });
  } catch (error) {
    console.error("Error verifying registration:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
