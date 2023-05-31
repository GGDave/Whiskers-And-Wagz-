const router = require('express').Router();
const { Types } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const typesData = await Types.findAll();
    res.status(200).json(typesData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Add more routes as needed

module.exports = router;