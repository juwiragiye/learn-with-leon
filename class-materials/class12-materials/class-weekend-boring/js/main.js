document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value.toLowerCase()
 

  //Conditionals go here

  if(day === "tuesday" || day === "thursday") {
    document.getElementById("placeToSee").innerText = "Class day"
  }

  else if(day === "saturday" || day === "sunday") {
    document.getElementById("placeToSee").innerText = "Weekenddddddd"

  }
  else {
    document.getElementById("placeToSee").innerText = "Boring"
  }


}
