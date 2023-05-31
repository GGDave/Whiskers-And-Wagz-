const router = require('express').Router();
const { Pets, Breeds, Types } = require('../../models');


router.get('/', async (req, res) => {
  try {
    const petsData = await Pets.findAll();
    res.status(200).json(petsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', (req, res) => {
  Pets.findOne({
		where: {
			id: req.params.id,
		},
		include: [Breeds, Types],
	})
		.then((data) => res.status(200).json(data))
		.catch((err) => res.status(500).json(err))
});

router.post('/', (req, res) => {

  Pets.create(req.body)
		.then((pets) => res.status(200).json(pets))
		.catch((err) => res.status(400).json(err))
});

module.exports = router;