<<<<<<< HEAD
const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

app.use(express.static('public'));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/create-account", (req, res) => {
  res.render("newuser");
})

app.get("/quiz", (req, res) => {
  res.render("quiz", {
    css: "quiz.css"
  });
});

app.get("/account", (req, res) => {
  res.render("account");
  // if (auth) {
  //   res.render("account");
  // } else {
  //   res.render("login");
  // }
});

app.get("/shelters", (req, res) => {
  res.render("shelter");
});

app.get("/home", (req, res) => {
  res.render("index");
});

app.listen(port);
=======
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
require("./app/routes/api-routes.js")(app);
require("./app/routes/html-routes.js")(app);

//Express server to begin listening
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
>>>>>>> master
