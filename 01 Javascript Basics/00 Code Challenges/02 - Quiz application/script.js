/*
A simple quiz application that asks 5 questions
Tracks the number of correct answers
If player gets 5 correct, gold crown
If player gets 4 or 3 correct, silver crown
If player gets 2 or 1 correct, bronze crown
If 0 correct, no crown
 */

alert('Welcome to my simple quiz application!');
var q1 = 'What does the acronym USB stand for when referring to a computer port?';
var a1 = 'Universal Serial Bus';
var q2 = 'What do you call the small image icons used to express emotions or ideas in digital communication?';
var a2 = 'Emoji';
var q3 = 'When referring to a computer monitor, what does the acronym LCD stand for?';
var a3 = 'Liquid Crystal Display';
var q4 = 'When talking about computer memory, what does the acronym ROM stand for?';
var a4 = 'Read-only memory';
var q5 = 'In 1975 an engineer created the first electronic camera while working for what company?';
var a5 = 'Kodak';

var correctGuesses = 0;

if ( prompt(q1).toUpperCase() === a1.toUpperCase()) {
    correctGuesses += 1;
    alert('That is correct!');
} else {
    alert('Sorry, but the correct answer was ' + a1);
}

if ( prompt(q2).toUpperCase() === a2.toUpperCase()) {
    correctGuesses += 1;
    alert('That is correct!');
} else {
    alert('Sorry, but the correct answer was ' + a2);
}

if ( prompt(q3).toUpperCase() === a3.toUpperCase()) {
    correctGuesses += 1;
    alert('That is correct!');
} else {
    alert('Sorry, but the correct answer was ' + a3);
}

if ( prompt(q4).toUpperCase() === a4.toUpperCase()) {
    correctGuesses += 1;
    alert('That is correct!');
} else {
    alert('Sorry, but the correct answer was ' + a4);
}

if ( prompt(q5).toUpperCase() === a5.toUpperCase()) {
    correctGuesses += 1;
    alert('That is correct!');
} else {
    alert('Sorry, but the correct answer was ' + a5);
}

if (correctGuesses === 5) {
    alert('Nice! You got a gold crown! (' + correctGuesses + ' correct)');
} else if (correctGuesses >2) {
    alert('Good job! You got a silver crown! (' + correctGuesses + ' correct)')
} else if (correctGuesses >0) {
    alert('You\'re doing good! You got a bronze crown! (' + correctGuesses + ' correct)')
} else {
    alert('Better luck next time! You got no crowns! (' + correctGuesses + ' correct)')
}