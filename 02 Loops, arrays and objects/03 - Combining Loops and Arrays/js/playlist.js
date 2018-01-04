var playList = [
    'I Did It My Way',
    'Respect',
    'Imagine',
    'Born to Run',
    'Louie Louie',
    'Maybellene'
];

function print(message) {
    document.write(message);
}


// the following portion of the code
// can also be written into a function

var htmlTag = '<ol>';
for (i=0; i<playList.length; i++) {
    htmlTag += '<li>' + playList[i] + '</li>';
}
htmlTag += '</ol>';

print(htmlTag);
