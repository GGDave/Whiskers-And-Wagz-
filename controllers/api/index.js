const router = require('express').Router();

// Import route handlers
const typesRoutes = require('./typesRoutes');
const breedsRoutes = require('./breedsRoutes');
const usersRoutes = require('./userRoutes');
const petsRoutes = require('./petsRoutes');
const adoptionRequestsRoutes = require('./adoptionRequestRoutes');

// Add routes to router
router.use('/types', typesRoutes);
router.use('/breeds', breedsRoutes);
router.use('/users', usersRoutes);
router.use('/pets', petsRoutes);
router.use('/Requests', adoptionRequestsRoutes);

module.exports = router;
