const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const recommendRoute = require('./routes/recommend');

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/recommend', recommendRoute);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
