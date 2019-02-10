
// Wins and losses variables code 
var wins = 0;
var losses = 0;
var winsText = document.getElementById("wins-text");
winsText.textContent = wins;
var lossesText = document.getElementById("losses-text");
lossesText.textContent = losses;

var newGame = document.getElementById("new-game");
newGame.onclick = function () {
    // logs number of guesses intially
    var guessLeft = document.getElementById("guess-left");
    var guesses = 10;
    guessLeft.textContent = guesses;
    // Picks an animal for player to guess in game
    var computerChoices = ["cat", "dog", "cow", "ferret", "pig", "parrot", "elephant", "monkey", "gazelle", "mouse"];
    var computerSolution = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    // this creates blank array for letters to be guessed and puts the word to be guessed letters into an array
    var wordArray = [];
    var blankArray = [];
    for (var i = 0; i < computerSolution.length; i++) {
        var computerChoiceText = document.getElementById("computerchoice-text");
        blankArray.push("_");
        computerChoiceText.textContent = blankArray.join(" ");
        wordArray.push(computerSolution.charAt(i));
    }
    var userGuessText = document.getElementById("user-guess");
    userGuessText.textContent = "";
    // when any key is pressed this function will fire

    document.onkeyup = function (event) {
        // adds letters guessed to viewport
        var userGuess = event.key;
        // checks if a letter character is entered and alerts if not
        var lettersOnly = /^[a-z]+$/;
        if (!userGuess.match(lettersOnly)) {
            alert("ONLY letters allowed. Try again!");
        }
        // runs if letter character is entered
        else {
            userGuessText.textContent += userGuess + ", ";
            // subtracts one from guesses
            guesses--;
            guessLeft.textContent = guesses;
            // compare player guess to computer solution and display letters guessed correctly
            for (var i = 0; i < wordArray.length; i++) {
                if (userGuess == wordArray[i]) {
                    blankArray[i] = userGuess;
                    computerChoiceText.textContent = blankArray.join(" ");
                    console.log(blankArray + "blank");
                    console.log(wordArray + "word");
                }
            };
           
        // conditions to determine outcome of win or loss
            if (wordArray.toString() === blankArray.toString() && guesses === 0) {
                alert("You saved him!");
                wins++;
                winsText.textContent = wins;
            }
            else if (wordArray.toString() !== blankArray.toString() && guesses === 0) {
                alert("He was hanged!!");
                losses++;
                lossesText.textContent = losses;
            }
            else if (wordArray.toString() === blankArray.toString()) {
                alert("You saved him!");
                wins++;
                winsText.textContent = wins;
            }
            else if (guesses <= 0) {
                alert("He was hanged!!");
                losses++;
                lossesText.textContent = losses;
            }
            else {

            };

        }
    }
}