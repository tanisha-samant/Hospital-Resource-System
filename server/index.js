const express = require('express');
const cors = require('cors');
const { processHospitalData } = require('./dataProcessing');
const { generateToken, authenticateToken } = require('./auth');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// Mock user database
const users = [
  { id: 1, username: 'admin', password: 'admin123', role: 'admin' },
  { id: 2, username: 'user', password: 'user123', role: 'user' }
];

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  
  if (user) {
    const token = generateToken(user);
    res.json({ token, role: user.role });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

app.get('/api/hospital-data', authenticateToken, async (req, res) => {
  try {
    const processedData = await processHospitalData();
    res.json(processedData);
  } catch (error) {
    res.status(500).json({ error: 'Error processing hospital data' });
  }
});

app.listen(port, () => {
  console.log(`Backend server running on port ${port}`);
});