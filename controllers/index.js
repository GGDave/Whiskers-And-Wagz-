const router = require('express').Router();
const apiRoutes = require('./api');
const { Pets } = require('../models');
router.use('/api', apiRoutes);


router.get('/', async (req, res) => {
    try {
      const petsData = await Pets.findAll();
      res.render("pets", { pets: petsData.map((pets) => pets.get({ plain: true })) });
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
