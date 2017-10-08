var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var PORT = process.env.PORT || 5002;
var app = express();



// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("app/public"));
app.use(bodyParser.urlencoded({ extended: false }));


// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


// Importing routes to html
require("./app/routes/html-routes.js")(app);

//Importing Api routes
require("./app/routes/api-route-user.js")(app);
require("./app/routes/api-route-consumption.js")(app);
require("./app/routes/api-restaurant.js")(app);




// Requiring our models for syncing
var db = require("./app/models");

// Syncing our sequelize models and then starting our express app
db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});	