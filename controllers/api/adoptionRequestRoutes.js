const router = require('express').Router();
const { AdoptionRequests } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const requestsData = await AdoptionRequests.findAll();
    res.status(200).json(requestsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Add more routes as needed

module.exports = router;