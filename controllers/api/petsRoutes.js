const router = require('express').Router();
const { Pets, Breeds, Types } = require('../../models');


router.get('/', async (req, res) => {
  try {
    const petsData = await Pets.findAll();
    res.render("pets", { pets: petsData.map((pets) => pets.get({ plain: true })) });
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
		.then(() => res.status(200).json({ message: 'Post successfully' }))
		.catch((err) => res.status(400).json(err))
});

router.put('/:id', (req, res) => {
	const { breed, type, ...rest } = req.body; // Destructure breed and type, and get the rest of the fields
  
	Pets.update({ breed, type, ...rest }, { // Update the breed and type along with other fields
	  where: {
		id: req.params.id,
	  },
	})
	  .then(() => res.status(200).json({ message: 'Pet updated successfully' }))
	  .catch((err) => res.status(400).json(err));
  });



router.delete('/:id', (req, res) => { 
	
	Pets.destroy({
		where: {
			id: req.params.id,
		},
	})
	.then(() => res.status(200).json({ message: 'Deletion successfully' }))
	.catch((err) => res.status(400).json(err))
});
module.exports = router;