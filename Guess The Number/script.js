const randomNo = parseInt(Math.random() * 100 + 1);

const userInput = document.querySelector('#userInput input');
const display = document.querySelector('.display');
const submit = document.querySelector('.subt');
const guessSlot = document.querySelector('.guessSlot');
const remaining = document.querySelector('.remaining');
const startOver = document.querySelector('.resultPara');
const p = document.createElement('p');
let prevGuess = [];
let numGuess = 1;
let playGame = true;
console.log(randomNo);

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    });
}
function validateGuess(guess) {
    if (isNaN(guess)) {
        alert(`please enter a valid number`);
    } else
        if (guess > 100) {
            alert(`Enter number between 1 and 100`);
        } else if (guess < 1) {
            alert(`Enter number between 1 and 100`);
        } else {
            prevGuess.push(guess);
            if (numGuess === 11) {
                displayGuess(guess);
                displayMessage(`Game Over, Random number was ${randomNo}`);
                endGame();
            }
            else {
                displayGuess(guess);
                checkGuess(guess);
            }
        }
}

function checkGuess(guess) {
    if (guess === randomNo) {
        displayMessage(`Congratulations, You guessed it Right`);
        endGame();
    } else if (guess < randomNo) {
        displayMessage(`chl ht gandu baap ko bhej`);
    } else if (guess > randomNo) {
        displayMessage(`bde log..`);
    }
}

function displayGuess(guess) {
    userInput.value = '';
    userInput.focus();
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message) {
    display.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
        randomNo = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess} `;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);

        playGame = true;


    });
}