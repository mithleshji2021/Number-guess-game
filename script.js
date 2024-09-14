let randomNum = parseInt(Math.random() * 100 + 1);
const userInput = document.querySelector("#guessField");
const submit = document.querySelector("#subt");
const guessSlot = document.querySelector(".guesses");
const remaning = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement('p');

// let preNum = []
let numGuess = 1

let playGame = true;


if (playGame) {
    submit.addEventListener("click", (e) => {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    })
}
function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Please enter a valid number");
        removeGuess(guess);
    }
    else if (guess > 100) {
        alert("Please enter number less than 100");
        removeGuess(guess);

    }
    else if (guess < 1) {
        alert("Please enter number Greator than 1");
        removeGuess(guess);
    }
    else {
        // preNum.push(guess);
        if (numGuess === 10) {
            removeGuess(guess);
            displayMessage(`Game Over. The right No was ${randomNum}`)
            endGame();

        } else {
            removeGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNum) {
        displayMessage(`You guessed it right`);
        endGame();
    }
    else if (guess < randomNum) {
        displayMessage(`Number is tooo low`);
        //   removeGuess(guess);
    }
    else if (guess > randomNum) {
        displayMessage(`Number is tooo high`);
        //   removeGuess(guess);
    }
}

function removeGuess(guess) {
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    numGuess++;
    remaning.innerHTML = `${11 - numGuess}`
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    userInput.value = ''
    userInput.setAttribute("disabled", '');
    p.classList.add('button');
    p.style.backgroundColor = "blue"
    p.style.cursor ='pointer'
    p.style.padding = "1px"
    p.style.borderRadius = "5px"
    p.innerHTML = `<h2 id="newGame"> Start New Game</h2>`
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector("#newGame");
    newGameButton.addEventListener("click", function () {
        randomNum = parseInt(Math.random() * 100 + 1);
        guessSlot.innerHTML = '';
        userInput.removeAttribute("disabled", '');
        numGuess = 1;
        remaning.innerHTML = `${11 - numGuess}`
        startOver.removeChild(p);
        playGame = true;
    })

}