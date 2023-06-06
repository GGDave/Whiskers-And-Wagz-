const router = require("express").Router();
const { Users } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const usersData = await Users.findAll();
    res.status(200).json(usersData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/signup", async (req, res) => {
  try {
    const userData = await Users.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const userData = await Users.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/:id", (req, res) => {
  Users.findOne({
    where: {
      id: req.params.id,
    },
    // include: [Types, Pets],
  })
    .then((users) => res.status(200).json(users))
    .catch((err) => res.status(500).json(err));
});

router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.put("/:id", (req, res) => {
  Users.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((users) =>
      res.status(200).json({ message: "Update successful", data: users })
    )
    .catch((err) => res.status(400).json(err));
});

router.delete("/:id", (req, res) => {
  Users.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((users) =>
      res.status(200).json({ message: "Deletion successful", data: users })
    )
    .catch((err) => res.status(400).json(err));
});
// Add more routes as needed, like for user registration, login, etc.

module.exports = router;