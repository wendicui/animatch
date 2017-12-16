
//var id = localStorage.getItem("id")
var email = localStorage.getItem("email")

//get all the matched animals

$(document).ready(function() {
  console.log(email)
  getAnimals(email)

//get all the matched data for this user
  function getAnimals(useremail){

    $.get(`/api/user/email/${email}`, function(data){
      console.log(data)
    })
  }
})
