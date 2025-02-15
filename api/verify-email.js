const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { email } = req.body;

    const { data, error } = await supabase
      .from("applications")
      .select("email")
      .eq("email", email)
      .single();

    if (error && error.code !== "PGRST116") {
      throw error;
    }

    res.json({ exists: !!data });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Failed to verify email" });
  }
};
