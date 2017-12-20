
//var id = localStorage.getItem("id")
var email = localStorage.getItem("email")

//get all the matched animals

$(document).ready(function() {
  var cont1 = $(".container1")
  var cont2 = $(".container2")
  console.log(email)
  getAnimals(email)

  $(".button").on("click", function(){
    console.log("click")
    window.location.href = "/quiz"
  })

//get all the matched data for this user
  function getAnimals(useremail){

    $.get(`/api/user/email/${email}`, function(data){
      console.log(data)
      // in case multiple data
      populate(data[data.length - 1])
    })
  }


  //populate data onto dom
  function populate(data){
  // add the first four to row 1
    for (var i = 0; i < 4; i++) {
      var newDiv = $('<div  class="col s3 z-depth-1" id="match-container">');
      var img= $(' <img  id="match-picture">');
      var name = $("<p>")
      name.text = data.Pets[i].name;
      img.src = data.Pets[i].media;
      newDiv.append(img);
      newDiv.append(name);
      cont1.append(newDiv);
    }

  // add the last four to row 2
    for (var i = 4; i < data.length; i++) {
      var newDiv = $('<div  class="col s3 z-depth-1" id="match-container">');
      var img= $(' <img  id="match-picture">');
      var name = $("<p>")
      name.text = data.Pets[i].name;
      img.src = data.Pets[i].media;
      newDiv.append(img);
      newDiv.append(name);
      cont2.append(newDiv);
    }

    //update user info
    $(".user-name").text = data.name;
    $(".user-location").text = data.zipcode;
    $(".user-hometype").text = data.hometype;
    $(".user-activity-level").text = data.activityLevel;
    $(".user-children").text = data.children;
    $(".user-pets").text = data.currentPet;
    $(".user-seeking").text = data.Pets[i].animal;
  }

})
