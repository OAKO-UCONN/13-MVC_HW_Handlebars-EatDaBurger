var express = require("express");

var router = express.Router();
var burger = require("../models/burger.js");

// get route -> index
router.get("/", function (req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function (req, res) {
  // express callback response by calling burger.selectAllBurger
  burger.all(function (burgerData) {
    // wrapper for orm.js that using MySQL query callback will return burger_data, render to index with handlebar
    res.render("index", { burger_data: burgerData });
  });
});

// post route -> back to index
router.post("/burgers/create", function (req, res) {
  // takes the request object using it as input for burger.addBurger
});

// put route -> back to index
router.put("/burgers/:id", function (req, res) {
  burger.update(req.params.id, function (result) {});
});

module.exports = router;
