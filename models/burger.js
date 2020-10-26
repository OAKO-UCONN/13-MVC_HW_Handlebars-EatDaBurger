var orm = require("../config/orm.js");

//Checks to see if this file is reachable.
console.log("RAN @ ./models.burger.js");
var burger = {

  //Select all Burgers.
  allBurgersMenu: function (cb) {
    orm.allBurgersMenu("burgers", function (res) {
      cb(res);
      console.log("RAN allBurgersMenu(); @ ./models.burger.js");
    });
  },

  //Create a Burger.
  createBurger: function (cols, vals, cbo) {
    orm.createBurger("burgers", cols, vals, res => {
      cbo(res);
      console.log("RAN createBurger(); @ ./models.burger.js");
    });
  },

  //Update a Burger.
  updateBurger: function (objColVals, condition, cbo) {
    orm.updateBurger("burgers", objColVals, condition, res => {
      cbo(res);
      console.log("RAN updateBurger(); @ ./models.burger.js");
    });
  },

  //Delete a Burger.
  deleteBurger: function (condition, cbo) {
    orm.delete("burgers", condition, res => {
      cbo(res);
      console.log("RAN allBurgersMenu(); @ ./modles.burger.js");
    });
  }

};

module.exports = burger;

/*
var burger = {

  //Select all burgers.
  allBurgersMenu: function (cb) {
    orm.all("burgers", function (res) {
      cb(res);
    });
  },

  //Create a Burger
  createBurger: function (name, cb) {
    orm.create("burgers")
  },
  updateBurger: function (id, cb) {

  }
};

*/