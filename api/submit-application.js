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
    const application = req.body;

    const { data, error } = await supabase
      .from("applications")
      .insert([application])
      .select();

    if (error) throw error;

    res.json({ success: true, data });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Failed to submit application" });
  }
};
