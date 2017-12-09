// Initialize Firebase
var firebase = require("firebase/app");
require("firebase/auth");
require("firebase/database");

//Google Connect
var provider = new firebase.auth.GoogleAuthProvider();

//Firebase Login
firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});

//Firebase Logout
firebase.auth().signOut().then(function() {
  // Sign-out successful.
}).catch(function(error) {
  // An error happened.
});

//Google Login
firebase.auth().signInWithRedirect(provider);