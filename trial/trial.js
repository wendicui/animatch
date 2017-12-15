var request = require('request');
//var rq = require("request-promise-any")
var apikey = "8c46a80af9f4501e366c726a72006ad8";

var url = "http://api.petfinder.com/pet.find?format=json&key=";

// function getAnimalbyId(idPassedIn){
//   var url = "http://api.petfinder.com/pet.get?format=json&key=";
//       var id = idPassedIn;
//        url += apikey;
//        url += `&id=${id}`
//        var animal
//        //console.log(url)
//     request(url, function(err, response, body){
//          var results = JSON.parse(body)
//          animal = results.petfinder.pet
//       // console.log(animal)
//       // console.log("_______________________________")
//       return animal
//
//     }).then(function(){return animal})
//
// }
//
// console.log(getAnimalbyId("38199537"))
var param = {
  location:"07302",
  animal: "cat"
}
 url += apikey;
 url += '&count=6'
 //check whether the input is made from users and add to url
 for(var key in param){
   if(param[key] != "undefined"){
     url += `&${key}=${param[key]}`
   }
 }

 request(url, function(error, response, body){
   var results = JSON.parse(body)
   var status = results.petfinder.header.status
   var list = results.petfinder.pets.pet

   // for (var i = 0; i < list.length; i++) {
   //   //get the id of animals
   //   console.log(Object.values(list[i].id)[0])
   // }

   console.log(list[0].media.photos.photo[0])

 })
