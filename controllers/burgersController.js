//Dependencies\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
var express = require("express");

var router = express.Router();
var burger = require("../models/burger.js");
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

////////////////////////////// GET INDEX //////////////////////////////////////
// get route -> index ================================================
router.get("/", function (req, res) {
  burger.all(data => {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
  //res.redirect("/burgers");
});
////////////////////////////////////////////////////////////////////////////////


//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; GET ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
router.get("api/burgers", function (req, res) {
  // express callback response by calling burger.selectAllBurger
  burger.all(function (burgerData) {
    // wrapper for orm.js that using MySQL query callback will return burger_data, render to index with handlebar
    res.render("index", { burger_data: burgerData });
  });
});
//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;


// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; POST ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

// post route -> back to index ========================================================
router.post("api/burgers/create", function (req, res) {
  // takes the request object using it as input for burger.addBurger
});
//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;


// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; PUT ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

// put route -> back to index =========================================================
router.put("api/burgers/:id", function (req, res) {
  burger.update(req.params.id, function (result) {});
});
//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

module.exports = router;
