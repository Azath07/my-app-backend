const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Simple form endpoint
app.post('/api/form', (req, res) => {
  const { name, email } = req.body;
  console.log(`Name: ${name}, Email: ${email}`);
  res.json({ message: 'Form submitted successfully', data: { name, email } });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
