// creating a function that generates random numbers

function getRandomNumber () {
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    return randomNumber;
}


// alert( getRandomNumber() );

/*

// Another way to declare functions as a variable



var alertRandom = function() {
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    alert(randomNumber)
};

alertRandom();

*/


// A simple function that takes 2 parameters

function getArea(length, width, unit) {
    var area = length * width;
    return area + ' ' + unit;
}

alert(getArea(parseFloat(prompt('What\'s the length?')), parseFloat(prompt('What\'s the width?')), prompt('What are the units?')));