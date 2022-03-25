// initialiaze a var and asign the amount of celcius
// convert celcius to frh using some kind of formula
// store the returned value into the a variable representing fnh


document.getElementById('convert').addEventListener('click', convert)

function convert() {
    document.getElementById("fair").innerText = "Fairnheights: "
    const celcius = Number(document.getElementById('celcius').value)
    let fairnheights = celcius * 1.8 + 32 
    console.log(fairnheights)
    document.getElementById('fair').innerText += fairnheights
    fairnheights = ""

}