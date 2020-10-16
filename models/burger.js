var orm = require("../config/orm.js");

var burger = {
  all: function (cb) {
    orm.all("burgers", function (res) {
      cb(res);
    });
  },
  create: function (name, cb) {},
  update: function (id, cb) {}
};

module.exports = burger;
