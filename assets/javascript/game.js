
// Define arrays of words
var wordBank = ["red", "blue", "green", "white"];
var wins = 0;
var losses = 0;
var wrongLetter = [];
var guessesLeft = 9;
var underScores = [];
var userGuesses = [];
// Answer variable
var randomWord = [];

// Reset
function reset() {
    guessesleft = 9;
    guessedLetters = [];
    underScores = [];
    startGame();
}

// updateRandomWords
function updateRandomWords() {
    document.getElementById("wrong-guesses").textContent = wrongLetter;
    document.getElementById("guesses-left").textContent = guessesLeft;
    document.getElementById("wins").textContent = wins;
    document.getElementById("losses").textContent = losses;
    document.getElementById("word-blanks").textContent = underScores.join(" ");
}

//Choose a random word from array
function startGame() {
    randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    console.log("random Word = " + randomWord);

    for (var i = 0; i < randomWord.length; i++) {
        underScores.push("_");
    }
    updateRandomWords();
}

function winlose() {
    alert("Winner");
    startGame();
}

function youLost() {
    alert('You Lose, try again.');
    startGame();
}
// Users guesses
document.onkeyup = function (event) {
    userGuesses = event.key;
    // Checking if the letter exist inside of the word
    if (randomWord.indexOf(userGuesses) > -1) {
        for (var i = 0; i < randomWord.length; i++) {
            if (randomWord[i] === userGuesses) {
                underScores.splice(i, 1, userGuesses);
                guessesLeft--;
            }
        }
        updateRandomWords();
    }
    else {
        wrongLetter.push(userGuesses);
        guessesLeft--;
        console.log("Wrong letter typed: " + wrongLetter);
    }

    if (wrongLetter.indexOf(userGuesses) >= 9) {
        youLost();
        losses++;
        guessesLeft = 9;
        wrongLetter = [];
        reset();
    }

    if (underScores.join("") === randomWord) {
        winlose();
        guessesLeft = 9;
        wins++;
        wrongLetter = [];
        reset();
    }

    if (guessesLeft === 0) {
        reset();
        losses++;
        guessesLeft = 9;
        
    }
    
};


// else {
//     wrongLetter.push(userGuesses);
//     guessesLeft--;
//     console.log("Wrong letter typed: " + wrongLetter);
// }