const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

app.get("/quiz", (req, res) => {
  res.render("quiz");
});

app.get("/account", (req, res) => {
  res.render("account");
});

app.get("/shelter", (req, res) => {
  res.render("shelter");
});

app.get("/home", (req, res) => {
  res.render("index");
});

app.listen(port);