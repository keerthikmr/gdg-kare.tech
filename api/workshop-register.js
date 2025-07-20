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
    const {
      name,
      registration_number,
      email,
      year_of_study,
      department,
      class: classSlot,
      mobile_number,
    } = req.body;

    if (
      !name ||
      !registration_number ||
      !email ||
      !year_of_study ||
      !department ||
      !classSlot ||
      !mobile_number
    ) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const { data, error } = await supabase
      .from("event_registrations")
      .insert([
        {
          name,
          registration_number,
          email,
          year_of_study,
          department,
          class: classSlot,
          mobile_number,
        },
      ])
      .select();

    if (error) throw error;

    res.json({ success: true, data });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Failed to submit registration" });
  }
};
