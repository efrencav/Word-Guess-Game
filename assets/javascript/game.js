
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
    guessesRemaining = 10;
    guessedLetters = [];
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
        underScores.push('_');
    }
    
    updateRandomWords();
}

function winlose() {
    alert("Winner");
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
                
            }
        }
        updateRandomWords();
    }
    else {
        wrongLetter.push(userGuesses);
        guessesLeft--;
        console.log(wrongLetter);
    }
    if (underScores.join("") === randomWord) {
        reset();
    

    }

    if (guessesLeft === 0) {
        losses++;
        guessesLeft = 9;
        reset();
    }
    
};


