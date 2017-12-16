var animalType;
var currentPet;
var children;
var homeType;
var activityLevel;

//api variables
var size , age, breed, age, sex= "undefined";
// can be changed according to user location
//var location = "07302";

$(document).ready(function() {
  console.log("Connected");
  // GET INFO
  $('#submit-button').on("click", function() {
    event.preventDefault();
    console.log("Submitted");
    var animalType = $("input[type=radio][name=animal-group]:checked").val();
    var currentPet = $("input[type=checkbox][name=pet-group]:checked").val();
    var children = $("input[type=checkbox][name=child-group]:checked").val();
    var homeType = $("input[type=radio][name=home-group]:checked").val();
    var activityLevel = $("input[type=radio][name=activity-level]:checked").val();
    console.log("animalType "+ animalType);
    console.log("currentPet "+currentPet);
    console.log("children "+children);
    console.log("homeType "+homeType);
    console.log("activityLevel "+activityLevel);
// filter search range based on user input
    if(children === "toddlers-infants"  ){
      size = "S";
      age = "Baby"
    }
    if(homeType === "apartment"){
      size = "S";
    }

    var url = `/api/pets/${animalType}/${breed}/${size}/07302/${age}/${sex}`
    console.log(url)

// create survey object for user
    var survey = {
      zipcode: "07302",
      homeType:homeType,
      activityLevel:activityLevel,
      children:children,
      currentPet:currentPet
    }

    addUserData(survey)
    getInfo(url)

  });

//add user survey to database
function addUserData(data){
  $.post("/api/users", data, function(){
    console.log("survey added")
  })
}

//get recommended animals
function getInfo(url){
  $.get(url,function(data){
    console.log("working")
    console.log(data)
    //display(data)
  })
}

// display data to show search result
function display(data){

}

});
