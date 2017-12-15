$(document).ready(function() {
  console.log("Quiz-Connected");

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
    animal = $("input[type=radio][name=animal-group]:checked").val();
    size = $("input[type=checkbox][name=size-group]:checked").val();
    age = $("input[type=checkbox][name=age-group]:checked").val();
    homeType = $("input[type=radio][name=home-group]:checked").val();
    activityLevel = $("input[type=radio][name=activity-level]:checked").val();

    var quizInfo = {
      animal: animal,
      pets: currentPet,
      children: children,
      hometype: homeType,
      activitylevel: activityLevel,
    }
    userData.push(quizInfo);
    window.location.replace("/api/pets/:animal/:size/:location/:age/:sex");

    $.get("/api/pets/:animal/:size/:location/:age/:sex", function(req, res) {
      animal = $("input[type=radio][name=animal-group]:checked").val();
      size = $("input[type=checkbox][name=size-group]:checked").val();
      age = $("input[type=checkbox][name=age-group]:checked").val();

      console.log(res);
      $("$match-container").append(results);
    });
    window.location.replace("/account")
  });

});