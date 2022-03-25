//Write your pseduo code first!
//Get a temperature
//Convert the temperature
//show it

document.getElementById("result").addEventListener("click", convert);

function convert() {
  const celcius = document.getElementById("celcius").value;
  const fairnheights = document.getElementById("fairnheights");
  const result = celcius * 1.8 + 32;

  fairnheights.innerText = result;
}
