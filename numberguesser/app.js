/* 
    GAME FUNCTIONS
  -Player must guess a number between min and max
  -Player gets certain amount of guesses
  -Notify player of guesses remaining
  -Notify the player of the correct answer if loose
  -Let player to play again  
*/

// Game value
let min = 1
let max = 10
let winNum = getRandomNumber(min,max)
let guessesLeft = 3

// UI Elements
const game = document.querySelector("#game")
const minNum = document.querySelector(".min-number")
const maxNum = document.querySelector(".max-number")
const guessBtn = document.querySelector("#guess-btn")
const guessInput = document.querySelector("#guess-input")
const message = document.querySelector(".message")

// Assign min and max and make this dinamic
minNum.textContent = min
maxNum.textContent = max

// Listen for guesses
guessBtn.addEventListener("click", function() {
    let guess = parseInt(guessInput.value)

    // Validate
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a valid number between ${min} and ${max}`, "red");
    }

    // Check if won
    if ( guess === winNum) {
        gameOver(true, `${winNum} is correct you WIN!`)
    } else if ( guess != winNum & guess >= min & guess <= max) {
        // Wrong number
        guessesLeft -= 1

        if(guessesLeft === 0) {
            gameOver(false, `Game is over, ${winNum} was the correct number.`)
        } else {
            // Game Continues

            // Clear the input
            guessInput.value = ""

            // Set info message
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, "red")
        }
    }
})

// Game over function 

function gameOver(won, msg) {
    let color;
    if ( won === true) {
        color = "green"
    } else {
        color = "red"
    }

    // Disable the input
    guessInput.disabled= true
    // Text color
    message.style.color = color
    // Set info message 
    setMessage(msg)


    guessBtn.value = "Play Again"
    guessBtn.className = "play-again"
}


// Play again event listener
game.addEventListener("mousedown", function(e) {
    if(e.target.className === "play-again") {
        window.location.reload()
    }
})

function setMessage(msg, color) {
    message.textContent = msg;
    message.style.color = color;
}

// Get winning number
function getRandomNumber (min, max) {
    return Math.floor(Math.random()*(max-min+1))
}