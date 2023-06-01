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

router.get('/:id', (req, res) => {
  
  Users.findOne({
		where: {
			id: req.params.id,
		},
		// include: [Types, Pets],
	})
		.then((users) => res.status(200).json(users))
		.catch((err) => res.status(500).json(err))
});

router.post('/', (req, res) => {
  
  Users.create(req.body)
  .then((users) => res.status(200).json({ message: "POST successful", data: users }))
  .catch((err) => res.status(400).json(err))
});

  router.put('/:id', (req, res) => {
	
    Users.update(req.body, {
		  where: {
			  id: req.params.id,
		  },
	  })
	.then((users) => res.status(200).json({ message: "Update successful", data: users }))
	.catch((err) => res.status(400).json(err))
  });

router.delete('/:id', (req, res) => {
	
  Users.destroy({
		where: {
			id: req.params.id,
		},
	})
	.then((users) => res.status(200).json({ message: "Deletion successful", data: users }))
		.catch((err) => res.status(400).json(err))
});
// Add more routes as needed, like for user registration, login, etc.

module.exports = router;