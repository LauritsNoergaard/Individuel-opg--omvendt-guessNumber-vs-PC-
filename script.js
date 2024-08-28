window.addEventListener("load", start)
window.addEventListener("load", listButtons)
let guess = -1
let numOfGuess = 0

function start() {
    console.log("Javascript is running")
    document.querySelector("#readyBtn").addEventListener("submit", guessNumber)
    document.getElementById("listOfBtns").classList.add("hidden")
}

function guessNumber() { 
    document.getElementById("listOfBtns").classList.remove("hidden")
    numOfGuess++
    if(guess==-1) {
        document.querySelector("#readyBtn").remove()
    }
    guess = guessing()
    event.preventDefault()
    document.getElementById("compGuess").innerHTML="I guess " + guess
    document.getElementById("numOfGuess").innerHTML=numOfGuess
}

function guessing() {
    return Math.floor(Math.random() * 100)
}

function listButtons() {
    document.getElementById("tooHigh").addEventListener("click", tooHigh)
    document.getElementById("tooLow").addEventListener("click", tooLow)
    document.getElementById("correct").addEventListener("click", correct)
}

function tooHigh() {
    //Add code to only guess numbers that are higher than the previous guess
    guessNumber()
}

function tooLow() {
    //Add code to only guess numbers that are lower than the previous guess
    guessNumber()
}

function correct() {
    document.getElementById("compGuess").innerHTML="Yippie!"
    document.getElementById("listOfBtns").classList.add("hidden")
}