
// Wins and losses variables code for later
var wins = 0;
var losses = 0;
var winsText = document.getElementById("wins-text");
winsText.textContent = wins;
var lossesText = document.getElementById("losses-text");
lossesText.textContent = losses;

var newGame = document.getElementById("new-game");
newGame.onclick= function(){
// logs number of guesses intially
var guessLeft = document.getElementById("guess-left");
var guesses = 10;
guessLeft.textContent = guesses;
// Picks an animal for player to guess in game
var computerChoices = ["cat", "dog", "cow","ferret","pig","parrot","elephant","monkey","gazelle","mouse"];
var computerSolution = computerChoices[Math.floor(Math.random() * computerChoices.length)];
// this creates blank array for letters to be guessed and puts the word to be guessed letters into an array
var wordArray = [];
var blankArray= [];
for (var i =0; i<computerSolution.length; i++){
    var computerChoiceText = document.getElementById("computerchoice-text");
    blankArray.push("_");
    computerChoiceText.textContent = blankArray.join(" ");
    wordArray.push(computerSolution.charAt(i));
    console.log(wordArray);
}
var userGuessText = document.getElementById("user-guess");
// when any key is pressed this function will fire
document.onkeyup = function(event){
    // subtracts one from guesses
    guesses --;
    guessLeft.textContent= guesses;
    // adds letters guessed to viewport
    var userGuess = event.key;
    userGuessText.textContent += userGuess + ", ";
    // compare player guess to computer solution and display letters guessed correctly
    for (var i=0; i<wordArray.length; i++){
        if (userGuess == wordArray[i]){
            blankArray[i]=userGuess;
            computerChoiceText.textContent = blankArray.join(" ");
            console.log(blankArray + "blank");
            console.log(wordArray + "word");
        }
    };
    if (wordArray.toString() === blankArray.toString()){
        alert("You saved him!");
        wins ++;
        winsText.textContent = wins;
    };
    if (guesses <= 0){
        alert("He was hung!!");
        losses ++;
        lossesText.textContent = losses;
    };
}
}