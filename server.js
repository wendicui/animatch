//Dependecies
var express = require("express");
var bodyParser = require("body-parser");

//Database

var db = require("./models");

//Express App
var app = express();
var PORT = process.env.PORT || 8080;
db.sequelize.sync().then(function() {
  app.listen(port);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static("public"));

//Express Routes
require("./app/routes/pet.js")(app);
require("./app/routes/html-routes.js")(app);

//Express server to begin listening
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

//Handlebars Routes
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

var routes = require("./controllers/pets_controller.js");

app.use("/", routes);
app.use("/update", routes);
app.use("/create", routes);