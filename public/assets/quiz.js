

//api variables
var size , age, breed, age, sex= "undefined";
// can be changed according to user location
//var location = "07302";

$(document).ready(function() {

  //import user data

  var firstname = localStorage.getItem('firstname')
  var lastname = localStorage.getItem('lastname')
  var userId
  var userEmail = localStorage.getItem("email")


  console.log("Quiz-Connected");
  console.log(firstname);

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


    var animalType = $("input[type=radio][name=animal-group]:checked").val();
    var currentPet = $("input[type=checkbox][name=pet-group]:checked").val();
    var children = $("input[type=checkbox][name=child-group]:checked").val();
    var homeType = $("input[type=radio][name=home-group]:checked").val();
    var activityLevel = $("input[type=radio][name=activity-level]:checked").val();
    var location = $("#user-zip").val().trim();

    console.log("animalType "+ animalType);
    console.log("currentPet "+currentPet);
    console.log("children "+children);
    console.log("homeType "+homeType);
    console.log("activityLevel "+activityLevel);
    console.log("location" + location)
// filter search range based on user input
    if(children === "toddlers-infants"  ){
      size = "S";
      age = "Baby"
    }
    if(homeType === "apartment"){
      size = "S";
    }

    var url = `/api/pets/${animalType}/${breed}/${size}/${location}/${age}/${sex}`
    console.log(url)

// create survey object for user
    var survey = {
      name: `${firstname} ${lastname}`,
      zipcode: location,
      homeType:homeType,
      activityLevel:activityLevel,
      children:children,
      currentPet:currentPet,
      email:userEmail
    }

    addUserData(survey,url)


  });

//add user survey to database
function addUserData(data,url){
  $.post("/api/users", data, function(info){
    console.log("survey added")
    //console.log(info)
    //get user id incase to add favorate animals to database
    userEmail = info.email
    userId = info.id
    localStorage.setItem("id",userId)
    console.log(userId)
    getInfo(url);
  })

}

//get recommended animals
function getInfo(url){
  $.get(url,function(data){
    console.log("working")
    console.log(data)
  //  console.log(data.pet[0].media.photos.photo[0])
    addData(data)
    //display(data)
  })
}

// add the match to create animal
function addData(data){
  var array = data.pet;
  for (var i = 0; i < array.length; i++) {
    var animal = array[i];
    var photo
    //check if it has images
    if(animal.media.photos.photo){
      photo = animal.media.photos.photo[0].$t
    }else{
      photo = '../images/dog-1.jpeg'
    }
    //create animal infor
    console.log('this is '+ userId)
    var newAnimal = {
      name:animal.name.$t,
      animal:animal.animal.$t,
      breed:animal.breeds.breed.$t,
      petFinderId:animal.id.$t,
      age:animal.age.$t,
      media:photo,
      size:animal.size.$t,
      sex:animal.sex.$t,
      description: animal.description.$t,
      UserId: parseInt(userId)
    }
    //add animal to database
    $.post("/api/animals", newAnimal, function(info){
      console.log("animal added")
      console.log(info)
      //get to the account page
      window.location.href = "/account"
    })
  }

}


// // display data to show search result
// function display(data){
//
// }

});
// =======
//     animal = $("input[type=radio][name=animal-group]:checked").val();
//     size = $("input[type=checkbox][name=size-group]:checked").val();
//     age = $("input[type=checkbox][name=age-group]:checked").val();
//     homeType = $("input[type=radio][name=home-group]:checked").val();
//     activityLevel = $("input[type=radio][name=activity-level]:checked").val();

//     var quizInfo = {
//       animal: animal,
//       pets: currentPet,
//       children: children,
//       hometype: homeType,
//       activitylevel: activityLevel,
//     }
//     userData.push(quizInfo);
//     window.location.replace("/api/pets/:animal/:size/:location/:age/:sex");

//     $.get("/api/pets/:animal/:size/:location/:age/:sex", function(req, res) {
//       animal = $("input[type=radio][name=animal-group]:checked").val();
//       size = $("input[type=checkbox][name=size-group]:checked").val();
//       age = $("input[type=checkbox][name=age-group]:checked").val();

//       console.log(res);
//       $("$match-container").append(results);
//     });
//     window.location.replace("/account")
//   });

// });
// >>>>>>> master
