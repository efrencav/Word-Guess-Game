
// Define arrays of words
var wordBank = ["red", "blue", "green", "white" ];
var wins = 0;
var losses = 0;
var wrongLetter = [];
var guessesLeft = 9;
var underScores = [];
var userGuesses = [];
// Answer variable
var randomWord;

//Choose a random word from array
function startGame() {
    randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    console.log(randomWord);

    for(var i = 0; i < randomWord.length; i++)
    { 
        underScores.push('_');
    }
    // Printing underscores to the screen
    document.getElementById("word-blanks").textContent = underScores.join(" ");

    // Reset
    wrongLetter = [];
    guessesLeft = 9;

    // HTML
    document.getElementById("guesses-left").textContent = guessesLeft;
    document.getElementById("wrong-letter").textContent = wrongLetter;
    document.getElementById("wins").textContent = wins;
    document.getElementById("losses").textContent = losses;
    }
    function winlose()
    {
        alert("Winner");
        startGame();
    }
    // Users guesses
    document.onkeyup = function(event)
    {
        userGuesses = event.key;
        // Checking if the letter exist inside of the word
        if(randomWord.indexOf(userGuesses) > -1)
        {
            for(var i = 0; i < randomWord.lenght; i++)
            {
                if(randomWord[i] === userGuesses) 
                {
                    underScores[i] = userGuesses;
                    console.log(underScores);
                }
            }
        }
        else
        {
            wrongLetter.push(userGuesses);
            guessesLeft--;
            console.log(wrongLetter);
            
        }
    }
    //Main
    startGame();
