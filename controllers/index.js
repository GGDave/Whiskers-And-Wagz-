const router = require("express").Router();
const apiRoutes = require("./api");
const { Types, Pets } = require("../models");

router.use("/api", apiRoutes);

router.get("/", async (req, res) => {
  try {
    const petsData = await Types.findAll();
    const types = petsData.map((types) => types.get({ plain: true }));
    console.log(Types);

    res.render("home", {
      layout: "main",
      types,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", async (req, res) => {
  try {
    if (req.session.logged_in) {
      return res.redirect("/");
    }
    res.render("login", { layout: "main" });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/dogs", async (req, res) => {
  try {
    const petsData = await Pets.findAll({
      where: {
        type_id: 1,
      },
    });
    const dogs = petsData.map((types) => types.get({ plain: true }));
    console.log(dogs);

    res.render("dogs", { layout: "main", dogs });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/cats", async (req, res) => {
  try {
    const petsData = await Pets.findAll({
      where: {
        type_id: 2,
      },
    });
    const cats = petsData.map((types) => types.get({ plain: true }));
    console.log(cats);

    res.render("cats", { layout: "main", cats });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/adoption", async (req, res) => {
  try {
    const petsData = await Types.findAll();
    const types = petsData.map((types) => types.get({ plain: true }));
    console.log(Types);

    res.render("adoption", { layout: "main", types });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/contact", async (req, res) => {
  try {
    const petsData = await Types.findAll();
    const types = petsData.map((types) => types.get({ plain: true }));
    console.log(Types);

    res.render("contact", { layout: "main", types });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/singlepet/:id", async (req, res) => {
  try {
    const petsData = await Pets.findOne({
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: Types,
        },
      ],
    });
    const pet = petsData.get({ plain: true });
    console.log(pet);

    res.render("singlepet", {
      layout: "main",
      pet,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;