const router = require('express').Router();
const { Breeds } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const breedsData = await Breeds.findAll();
    res.status(200).json(breedsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Add more routes as needed

module.exports = router;