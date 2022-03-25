//Handle Capital Letters, Place result in DOM, add a check for humpday (Wed)

document.querySelector('#check').addEventListener('click', check)
const placeToSee = document.getElementById("placeToSee")

function check() {

  const day = document.querySelector('#day').value.toLowerCase()

  if(day === "tuesday" || day === "thursday"){
    placeToSee.innerText = "YOU HAVE CLASS"
    console.log("YOU HAVE CLASS")
  }else if( day === "saturday" || day === "sunday"){
    placeToSee.innerText = "ITS A WEKEENDIIIIIIIIIIIIIIIIIIII"
    console.log("Its The Weekend")
  }else{
    placeToSee.innerText = "BORING 😑"
    console.log("BORING")
  }

}
