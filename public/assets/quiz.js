var animalType;
var currentPet;
var children;
var homeType;
var activityLevel;

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
    console.log(animalType);
    console.log(currentPet);
    console.log(children);
  });
});