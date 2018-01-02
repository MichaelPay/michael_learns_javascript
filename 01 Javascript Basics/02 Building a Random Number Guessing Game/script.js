var correctGuess = false;
var randomNumber = Math.floor(Math.random() * 6 ) + 1;
var guess = prompt('I am thinking of a number between 1 and 6. What is it?');
if (parseInt(guess) === randomNumber ) {
    correctGuess = true;
} else if ( parseInt(guess) < randomNumber ){
    var guessMore = prompt('Your guess was too low, guess again!');
    if (parseInt(guessMore) === randomNumber){
        correctGuess = true
    }
} else if (parseInt(guess) > randomNumber) {
    var guessMore2 = prompt('Your guess was too high, guess again!');
    if (parseInt(guessMore2) === randomNumber) {
        correctGuess = true
    }
}
if ( correctGuess ) {
    alert('You guessed the number!');
    document.write('<p>You guessed the number!</p>');
} else {
    alert('Sorry. The number was ' + randomNumber + '!');
    document.write('<p>Sorry. The number was ' + randomNumber + '.</p>');
}