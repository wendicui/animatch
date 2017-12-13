var express = require('express');
var router = express.Router();
var queries = require('../models/pets.js');

var request = require('request');
var apikey = "8c46a80af9f4501e366c726a72006ad8";
var secret = "041e4b5e005bf0fe3dce1929e5d7813b";

//html render
router.get("/login",(req,res)=> {
    res.render("login");
})

router.get("/create-account", (req, res) => {
  res.render("newuser");
})

router.get("/quiz", (req, res) => {
  res.render("quiz", {
    css: "quiz.css"
  });
});

router.get("/account", (req, res) => {
  res.render("account");
  // if (auth) {
  //   res.render("account");
  // } else {
  //   res.render("login");
  // }
});

router.get("/shelters", (req, res) => {
  res.render("shelter");
});

router.get("/home", (req, res) => {
  res.render("index");
});

router.get('/', function (req, res) {
    queries.show(function(data){
        //console.log(data);
        var Data = {
            petsData: data
        }
        //res.render('index', {data : Data});
        res.render('index', Data);
    });
});

router.post('/create', function (req, res) {
    queries.add(req.body.item, function(data) {
        res.redirect('/');
    });
});

router.post('/update', function(req, res){
  queries.add(req.body.id, function(result){
    res.redirect('/');
  });
});



module.exports = router;
