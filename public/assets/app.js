
$(document).ready(function() {
  console.log("Connected");

  var userFirstName;
  var userLastName;
  var userEmail;
  var userPassword;

  // Initialize Firebase
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


  //create user
  $('#signup-button').on("click", function() {
    event.preventDefault();
    console.log("Submitted");
    var userFirstName = $("#first_name").val();
    var userLastName = $("#last_name").val();
    var userEmail = $("#user-email").val();
    var userPassword = $("#user-password").val();
    console.log(userFirstName);
    console.log(userLastName);
    console.log(userEmail);
    localStorage.setItem('firstname',userFirstName)
    localStorage.setItem('lastname',userLastName)
    localStorage.setItem('email',userEmail)


    firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      if (error) {
        console.log(errorCode + errorMessage);
      } else
        console.log("User Submitted");
    });

    window.location.replace("/quiz");
  });

  //login user
  $('#login-button').on("click", function() {
    event.preventDefault();
    console.log("Submitted");
    var userEmail = $("#user-email").val();
    var userPassword = $("#user-password").val();
    localStorage.setItem('email',userEmail);
    //check firebase
    firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode) {
        console.log(errorCode + errorMessage);
      } else
        console.log("User Login Successful");
    });

    window.location.replace("/account")
  });


});
