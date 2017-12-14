const express = require("express");
const bodyParser = require("body-parser")

//set port
const PORT = process.env.PORT || 8000;

//create server
const app = express();

//use body parser
app.use(bodyParser.urlencoded({ extended: false }));

//create route for public folder file
app.use(express.static("public"));

//Set Handlebars
const handleBar = require("express-handlebars");

app.engine("handlebars", handleBar({defaultLayout:"main"}));
app.set("view engine", "handlebars");

//import routes
const routes = require("./controllers/pets_controllers.js");

app.use("/", routes);

var db = require("./models");

db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
