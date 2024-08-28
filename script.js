window.addEventListener("load", start)
window.addEventListener("load", listButtons)
let guess = -1

function start() {
    console.log("Javascript is running")
    document.querySelector("#readyBtn").addEventListener("submit", guessNumber)
}
function test() {
    
}

function guessNumber() { 
    if(guess==-1) {
        document.querySelector("#readyBtn").remove()
    }
    guess = Math.floor(Math.random() * 99 + 1)
    event.preventDefault()
    document.getElementById("compGuess").innerHTML="I guess " + guess
    
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
}