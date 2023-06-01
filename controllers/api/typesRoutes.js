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

router.get('/:id', (req, res) => {
  
  Breeds.findOne({
		where: {
			id: req.params.id,
		},
		// include: [Types, Pets],
	})
		.then((data) => res.status(200).json(data))
		.catch((err) => res.status(500).json(err))
});

router.post('/', (req, res) => {
  
  Breeds.create(req.body)
  .then((breeds) => res.status(200).json({ message: "POST successful", data: breeds }))
  .catch((err) => res.status(400).json(err))
});

router.put('/:id', (req, res) => {
	
	Breeds.update(req.body, {
		  where: {
			  id: req.params.id,
		  },
	  })
	.then((breeds) => res.status(200).json({ message: "Update successful", data: breeds }))
	.catch((err) => res.status(400).json(err))
  });

router.delete('/:id', (req, res) => {
	
  Breeds.destroy({
		where: {
			id: req.params.id,
		},
	})
	.then((breeds) => res.status(200).json({ message: "Deletion successful", data: breeds }))
		.catch((err) => res.status(400).json(err))
});

// Add more routes as needed

module.exports = router;