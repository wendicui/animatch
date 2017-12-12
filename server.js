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
const routes = require("./controllers/pets_controller.js");

app.use("/", routes);

app.listen(PORT, function(){
    console.log("listening Port " + PORT)
});

// const express = require("express");

// const app = express();
// const port = process.env.PORT || 3000;

// const exphbs = require("express-handlebars");

// app.engine("handlebars", exphbs({
//   defaultLayout: "main"
// }));
// app.set("view engine", "handlebars");

// app.use(express.static('public'));

// app.get("/", (req, res) => {
//   res.render("index");
// });

// app.get("/login", (req, res) => {
//   res.render("login");
// });

// app.get("/create-account", (req, res) => {
//   res.render("newuser");
// })

// app.get("/quiz", (req, res) => {
//   res.render("quiz", {
//     css: "quiz.css"
//   });
// });

// app.get("/account", (req, res) => {
//   res.render("account");
//   // if (auth) {
//   //   res.render("account");
//   // } else {
//   //   res.render("login");
//   // }
// });

// app.get("/shelters", (req, res) => {
//   res.render("shelter");
// });

// app.get("/home", (req, res) => {
//   res.render("index");
// });

// app.listen(port);

// //Dependecies
// var express = require("express");
// var bodyParser = require("body-parser");

// //Database

// var db = require("./models");

// //Express App
// var app = express();
// var PORT = process.env.PORT || 8080;
// db.sequelize.sync().then(function() {
//   app.listen(port);
// });

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.text());
// app.use(bodyParser.json({ type: "application/vnd.api+json" }));
// app.use(express.static("public"));

// //Express Routes
// require("./app/routes/pet.js")(app);
// require("./app/routes/html-routes.js")(app);

// //Express server to begin listening
// app.listen(PORT, function() {
//   console.log("App listening on PORT " + PORT);
// });

// //Handlebars Routes
// var exphbs = require("express-handlebars");

// app.engine("handlebars", exphbs({
//   defaultLayout: "main"
// }));
// app.set("view engine", "handlebars");

// var routes = require("./controllers/pets_controller.js");

// app.use("/", routes);
// app.use("/update", routes);
// app.use("/create", routes);


