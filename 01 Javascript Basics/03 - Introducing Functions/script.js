// creating a function that generates random numbers

function getRandomNumber () {
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    return randomNumber;
}


alert( getRandomNumber() );

/*

// Another way to declare functions as a variable



var alertRandom = function() {
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    alert(randomNumber)
};

alertRandom();

*/

