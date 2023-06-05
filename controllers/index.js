const router = require('express').Router();
const apiRoutes = require('./api');
const { Types } = require('../models');
router.use('/api', apiRoutes);


router.get('/', async (req, res) => {
    try {
      const petsData = await Types.findAll();
      res.render("types", { types: petsData.map((types) => types.get({ plain: true })) });
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
