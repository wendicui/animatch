var request = require('request');
var apikey = "8c46a80af9f4501e366c726a72006ad8";
var secret = "041e4b5e005bf0fe3dce1929e5d7813b";


// module.exports =
function trial(app){
  //get bread list
 app.get("api/pets/:animal", function(req,res){
    var url = "http://api.petfinder.com/breed.list?format=json&key=";
    var animal = req.params.animal;

    url += apikey;
    url += `&animal=${animal}`

    console.log("this is the " + url)

    request(url, function(error, response, body){
      var allResults = JSON.parse(body);
      var resultArray = allResults.petfinder.breeds
      res.json(resultArray)
    })

 })

//get specified animals
app.get("api/pets/:animal/:breed/:size/:location/:age/:sex", function(req,res){
 var url = "http://api.petfinder.com/pet.find?format=json&key=";
//   var param = req.params
//   var animal = param.animal
//   var breed = param.breed;
//   // (S=small, M=medium, L=large, XL=extra-large)
//   var size = param.size;
// Baby, Young, Adult, Senio
//   var age = param.age;
//   //M=male, F=female
//   var sex = param.sex;
//   //either zipcode or state, this one is required
//   var location = param.location

  url += apikey;

//check whether the input is made from users and add to url
  for(var key in param){
    if(param[key] != "undefined"){
      url += `&${key}=${param[key]}`
    }
  }


console.log(url)
  request(url, function(error, response, body){
    var results = JSON.parse(body)
    var status = results.petfinder.header.status
    console.log(status)
  })
})



}

trial("where")
