window.addEventListener("load", start)
window.addEventListener("load", listButtons)
let guess = -1
let numOfGuess = 0

let min = 1
let max = 99
let middle = Math.floor((min+max)/2)

function start() {
    console.log("Javascript is running")
    document.querySelector("#readyBtn").addEventListener("submit", guessNumber)
    document.getElementById("listOfBtns").classList.add("hidden")
    document.getElementById("tryAgainBtn").classList.add("hidden")
}

//KIG I KRAV: FX TILFØJ KOMMENTAR


//THIS WORKS YAY
function guessNumber() { 
    document.getElementById("listOfBtns").classList.remove("hidden")
    numOfGuess++
    if(guess==-1) {
        document.querySelector("#readyBtn").remove()
    }
    
    console.log(guess)
    if(numOfGuess<=7) {
        
    middle = Math.floor((min+max)/2)
    guess = middle

    event.preventDefault()
    document.getElementById("compGuess").innerHTML="I guess " + guess
    document.getElementById("numOfGuess").innerHTML=numOfGuess
    } else {
        document.getElementById("compGuess").innerHTML="STOP LYING! " + guess + " was correct"
    }
    
}

function listButtons() {
    document.getElementById("tooHigh").addEventListener("click", tooHigh)
    document.getElementById("tooLow").addEventListener("click", tooLow)
    document.getElementById("correct").addEventListener("click", correct)
}

function tooHigh() {
    if(numOfGuess > 7) {
        correct()
    } else {
        max = middle-1
        guessNumber()
    }
}

function tooLow() {
    if(numOfGuess > 7) {
        correct()
    } else {
        min = middle + 1
        guessNumber()
    }   
}

function correct() { 
    if (numOfGuess < 4) {
        document.getElementById("compGuess").innerHTML="Yippie!"
    } else if (numOfGuess < 7) {
        document.getElementById("compGuess").innerHTML="Not too shabby"
    } else if (numOfGuess==7){
        document.getElementById("compGuess").innerHTML="I envy you, you don't have to live with the fact that it took you, a machine, 7 tries to guess a number between 0 and 100. I'm a failure."
    } else {
        document.getElementById("compGuess").innerHTML="Liar"
    }
    
    document.querySelector("#tryAgainBtn").addEventListener("submit", start)
    document.getElementById("listOfBtns").classList.add("hidden")
    document.getElementById("tryAgainBtn").classList.remove("hidden")
}





/*  FUNCTIONS TO USE
I DON'T NEED THIS, SINCE I TELL IT IF IT'S TOO HIGH OR LOW
function compare(search, value) {
    return search-value
}

function binarySearch(search, values) {

    while (min<=max) { 
        middle = Math.floor((min+max)/2)
        c = compfunc(search, values[middle])//compare(search, values[middle])

        if(c == 0)  { //found
            console.log("FOUND")
            console.log(middle)
            return middle
        } else if(c > 0) { //too high
            min = middle + 1
        } else { //too low
            max = middle-1
        }
    }

    return -1
    
}

*/