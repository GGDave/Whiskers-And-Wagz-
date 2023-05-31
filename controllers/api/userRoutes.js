const router = require('express').Router();
const { Users } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const usersData = await Users.findAll();
    res.status(200).json(usersData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Add more routes as needed, like for user registration, login, etc.

module.exports = router;