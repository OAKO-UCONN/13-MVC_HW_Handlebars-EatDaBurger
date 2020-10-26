var mysql = require("mysql");

// Setup environment for connection.
if (process.env.JAWSDB_URL) {
    //Heroku Production Mode
  connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
    //Local Development Mode
  var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "T)UW%#T_$()qwr-a)jsrtg0-",
    database: "burgers_db"
  });
};

// Connect to DB and log it.
connection.connect(function (err) {
  if (err) {
    console.error("!Error connecting to DB!: " + err.stack);
    return;
  }
  console.log("Connected as ID: " + connection.threadId);
});

// Export as a module so the orm.js file can access this.
module.exports = connection;