//Dependencies\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
var express = require("express");

var router = express.Router();
var burger = require("../models/burger.js");
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

////////////////////////////// GET INDEX //////////////////////////////////////
// get route -> index ================================================
router.get("/", function (req, res) {
  console.log("Runnning: router.get(~/~, function (req, res) {")
  burger.allBurgersMenu(data => {
    console.log("Running: burger.allBurgersMenu(data => {")
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
  console.log("Running: router.get(~api/burgers~, function (req, res) {")
  // express callback response by calling burger.selectAllBurger
  burger.allBurgersMenu(function (burgerData) {
    // wrapper for orm.js that using MySQL query callback will return burger_data, render to index with handlebar
    res.render("index", { burger_data: burgerData });
  });
});
//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;


// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; POST ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

// post route -> back to index ========================================================
router.post("api/burgers/create", function (req, res) {
  //console.log(req.body)
  console.log("Running: router.post(~api/burgers/create~, function (req, res) {");
  burger.createBurger(`${req.body.name}`, function (response) {
  
  // takes the request object using it as input for burger.addBurger
  res.status(200).end();
  });
});
//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;


// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; PUT ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

// put route -> back to index =========================================================
router.put("api/burgers/:id", function (req, res) {
  console.log("Running: router.put(~api/burgers/:id~, function (req, res) {");
  var id = params.id;
  console.log("The ID is: " + id);
  console.log(req.body.devoured);

  // ^ // UPDATE {==}
  burger.updateBurger(req.params.id.devoured, function (result) {
    console.log("Running: router.put(~api/burgers/:id~, function (req, res) { ");

    //Handle Errors
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      // res.redirect("/")
      return res.status(200).end();
    };
  
  });
});
//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;


//;;;;;;;;;;;;;;;;;;;;;;;;;;; DELETE ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

router.delete("/api/burgers/:id", function (req, res) {
  var id = req.params.id

  // - // DELETE {==}
  burger.deleteBurger(id, (result) => {
    if (result.affectedRows == 0) {
      return res.status(404).end();
    } else {
      return res.status(200).end();
    }
  })

})

module.exports = router;
