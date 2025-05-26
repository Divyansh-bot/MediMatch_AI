const express = require('express');
const router = express.Router();
const data = require('../data/medicines.json');

router.post('/', (req, res) => {
  const { input } = req.body;
  const results = data.filter(med =>
    med.brand.toLowerCase().includes(input.toLowerCase())
  );
  if (results.length === 0) {
    return res.status(404).json({ message: 'No alternatives found' });
  }
  res.json(results);
});

module.exports = router;
