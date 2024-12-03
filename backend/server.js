const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY // Use service role key for backend
);

// Verify email endpoint
app.post('/api/verify-email', async (req, res) => {
  try {
    const { email } = req.body;
    
    const { data, error } = await supabase
      .from('applications')
      .select('email')
      .eq('email', email)
      .single();

    if (error && error.code !== 'PGRST116') {
      throw error;
    }

    res.json({ exists: !!data });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to verify email' });
  }
});

// Submit application endpoint
app.post('/api/submit-application', async (req, res) => {
  try {
    const application = req.body;
    
    const { data, error } = await supabase
      .from('applications')
      .insert([application])
      .select();

    if (error) throw error;

    res.json({ success: true, data });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to submit application' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 