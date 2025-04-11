const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/location', (req, res) => {
  const { latitude, longitude } = req.body;
  const log = `Location received: ${latitude}, ${longitude} at ${new Date().toISOString()}\n`;
  console.log(log);
  fs.appendFileSync('locations.log', log);
  res.send('Thanks! Your location has been recorded.');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
