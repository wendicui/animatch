var express = require('express');
var router = express.Router();
var parser = express.json();
//var queries = require('../models/pets.js');
var queries = require("../models");

var request = require('request');
var apikey = "8c46a80af9f4501e366c726a72006ad8";
var secret = "041e4b5e005bf0fe3dce1929e5d7813b";
// var $ = require("jquery");

//html render
router.get("/login", (req, res) => {
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


router.get('/', function(req, res) {
  res.render('index');
});



// api router
//get bread list
router.get("/api/pets/:animal", function(req, res) {
  var url = "http://api.petfinder.com/breed.list?format=json&key=";
  var animal = req.params.animal;

  url += apikey;
  url += `&animal=${animal}`

  //console.log("this is the " + url)

  request(url, function(error, response, body) {
    var allResults = JSON.parse(body);
    var resultArray = allResults.petfinder.breeds
    res.json(resultArray)
  })
});

  //return specific animals
  router.get("/api/pets/:animal/:breed/:size/:location/:age/:sex", function(req,res){
   var url = "http://api.petfinder.com/pet.find?format=json&key=";
    var param = req.params;
    console.log(param)
    url += apikey;
    url += '&count=8'
    //check whether the input is made from users and add to url
    for(var key in param){
      if(param[key] != "undefined"){
        url += `&${key}=${param[key]}`
      }
    }

  request(url, function(error, response, body) {
    var results = JSON.parse(body)
    var status = results.petfinder.header.status
    var list = results.petfinder.pets
    console.log(list);
    res.json(list);
  })
})

// //get animal infor by id
router.get("/api/animal/:id", function(req, res) {
  var url = "http://api.petfinder.com/pet.get?format=json&key=";
  var id = req.parmas.id
  url += apikey;
  url += `&id=${id}`

  request(url, function(err, response, body) {
    var results = JSON.parse(body)
    var animal = results.petfinder.pets
    res.json(animal)
  })
});


// function that grab animal infor by id
// function getAnimalbyId(idPassedIn, Obj, i){
//   var url = "http://api.petfinder.com/pet.get?format=json&key=";
//       var id = idPassedIn;
//        url += apikey;
//        url += `&id=${id}`
//        //console.log(url)
//       request(url, function(err, response, body){
//          var results = JSON.parse(body)
//          var animal = results.petfinder.pet
//          //add this animal as the ith attribute of the passed in  Obj, should use iteration
//          //create newkey
//          var newkey = i + "th"
//          Obj[newkey] = animal;
//
//        })
// }

//get user information by id

router.get("/api/user/:id", function(req, res) {
  //list all the favorate animals
  console.log("ere")
  queries.User.findOne({
    where: {
      id: req.params.id
    },
    include: [queries.Pet]
  }).then(function(data) {
    //create an object to hold all the data info
    // var animalList = {}
    // var allAnimals = data.dataValues.Pets;
    // for (var i = 0; i < allAnimals.length; i++) {
    //   var id = allAnimals[i].dataValues.petFinderId
    //   //add the returned animal infor to the object
    //    getAnimalbyId(id, animalList,i)
    // }
    //   console.log("_____________________________")
    //   console.log(animalList)
    res.json(data);

  })
})

//get user information by email

router.get("/api/user/email/:email", function(req, res) {
  //list all the favorate animals

  queries.User.findAll({
    where: {
      email: req.params.email
    },
    include: [queries.Pet]
  }).then(function(data) {

    res.json(data);

  })
})


  //create new user file
  router.post("/api/users", function(req,res) {
    console.log(req.body)
    queries.User.create(req.body).then(function(data){
      res.json(data);
    })
})

//create new animal


  router.post("/api/animals", function(req,res) {
    console.log(req.body)
    queries.Pet.create(req.body).then(function(data){
      console.log("animal added")
      res.json(data);
    })
})

module.exports = router;
