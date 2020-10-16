var mysql = require("mysql");

var connection = mysql.createConnection({});

connection.connect(function (err) {});

module.exports = connection;
