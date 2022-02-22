document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value
 

  //Conditionals go here

  if(day === "Tuesday" || day === "Thursday") {
    document.getElementById("placeToSee").innerText = "Class day"
  }

  else if(day === "Saturday" || day === "Sunday") {
    document.getElementById("placeToSee").innerText = "weekend"

  }
  else {
    document.getElementById("placeToSee").innerText = "boring...."
  }


}
