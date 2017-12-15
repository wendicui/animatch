var router = require("controllers/pets_controllers.js");

$(document).ready(function() {
  console.log("Connected");

  var animalType;
  var currentPet;
  var children;
  var homeType;
  var activityLevel;
  var config = {
    apiKey: "AIzaSyDH4QI1MF7gBkE9Tt9vn6rp3JXavnLGBIs",
    authDomain: "animatch-7be82.firebaseapp.com",
    databaseURL: "https://animatch-7be82.firebaseio.com",
    projectId: "animatch-7be82",
    storageBucket: "animatch-7be82.appspot.com",
    messagingSenderId: "250916829970"
  };
  firebase.initializeApp(config);

  var userData = firebase.database();

  // GET INFO
  $('#submit-button').on("click", function() {
    event.preventDefault();
    console.log("Submitted");
    var animal = $("input[type=radio][name=animal-group]:checked").val();
    var size = $("input[type=checkbox][name=size-group]:checked").val();
    var age = $("input[type=checkbox][name=age-group]:checked").val();
    var homeType = $("input[type=radio][name=home-group]:checked").val();
    var activityLevel = $("input[type=radio][name=activity-level]:checked").val();
    console.log(animalType);
    var quizInfo = {
      animal: animalType,
      pets: currentPet,
      children: children,
      hometype: homeType,
      activitylevel: activityLevel,
    }
    userData.push(quizInfo);
    window.location.replace("/api/pets/:animal/:size/:location/:age/:sex");
    window.location.replace("/account")
  });
});