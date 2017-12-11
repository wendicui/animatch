var request = require('request');

// module.exports =
function trial(app){
  // app.get("api/pets/:category", function(req,res){

    var url = "http://api.petfinder.com/breed.list?format=json&key=";
    var apikey = "8c46a80af9f4501e366c726a72006ad8";
    var secret = "041e4b5e005bf0fe3dce1929e5d7813b";
    //var category = req.params.category;
    var category = "cat";


    url += apikey;
    url += `&animal=${category}`

    console.log("this is the " + url)

    request(url, function(error, response, body){
      var allResults = JSON.parse(body);
      var resultArray = allResults.petfinder.breeds
      res.json(resultArray)
    })
  // })


}

trial("where")
