//Dependencies
var express = require("express");
var exphbs = require("express-handlebars");

//Port and Initalization
var PORT = process.env.PORT || 8088;
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// {{{{{{{{{{{{{{{{{{{{ Handlebars }}}}}}}}}}}}}}}}}}}}
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// {{{{{{{{{{{{{{{{{{{{ View Engine }}}}}}}}}}}}}}}}}}}}}}}

//Defining the routes
var routes = require("./controllers/burgersController")
app.use(routes);

//Log to console once server started.
app.listen(PORT, function () {
  console.log("Listening on port:%s", PORT);
});
