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

router.get('/:id', (req, res) => {
  
  AdoptionRequests.findOne({
		where: {
			id: req.params.id,
		},
		// include: [Product],
	})
		.then((adoptionrequests) => res.status(200).json(adoptionrequests))
		.catch((err) => res.status(500).json(err))
});

router.post('/', (req, res) => {

  AdoptionRequests.create(req.body)
    .then((adoptionrequests) => res.status(200).json({ message: "Post successful", data: adoptionrequests }))
		.catch((err) => res.status(400).json(err))
});

router.put('/:id', (req, res) => {
 
  AdoptionRequests.update(req.body, {
		where: {
			id: req.params.id,
		},
	})
  .then((adoptionrequests) => res.status(200).json({ message: "Update successful", data: adoptionrequests }))
		.catch((err) => res.status(400).json(err))
});

router.delete('/:id', (req, res) => {
	
  AdoptionRequests.destroy({
		where: {
			id: req.params.id,
		},
	})
  .then((adoptionrequests) => res.status(200).json({ message: "Deletion successful", data: adoptionrequests }))
		.catch((err) => res.status(400).json(err))
});
// Add more routes as needed

module.exports = router;