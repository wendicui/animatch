
var id = localStorage.getItem("id")

//get all the matched animals

$(document).ready(function() {
  console.log(id)
  getAnimals(id)

//get all the matched data for this user
  function getAnimals(userid){

    $.get(`/api/user/${id}`, function(data){
      console.log(data)
    })
  }
})
