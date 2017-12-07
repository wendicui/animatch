//Dependecies
var express = require("express");
var bodyParser = require("body-parser");

//Express App
var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static("app/public"));

//Express Routes
require("./app/routes/pet.js")(app);
require("./app/routes/html-routes.js")(app);

//Express server to begin listening
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
