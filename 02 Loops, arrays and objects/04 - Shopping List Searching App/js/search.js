// Print functions now only prints at the end of a loop.

var inStock = [ 'apples', 'eggs', 'milk', 'cookies', 'cheese', 'bread', 'lettuce', 'carrot', 'broccoli', 'pizza', 'potato', 'crackers', 'onion', 'tofu', 'frozen dinner', 'cucumber'];

function print(message) {
    document.write( '<p>' + message + '</p>');
}

var stopSearch = false;


function searchString(search) {
    if (inStock.indexOf(search)>-1) {
        document.write('<p> Your search item, ' + search + ' was in the shopping list! </p>');
    } else {
        document.write('<p> Sorry, but ' + search + ' was not found! </p>');
    }
}

if (stopSearch === false ) {
    var search = prompt('What item would you like to search for? Type \'list\' for a list of all the items or type \'quit\' to exit.');
    if ( search.toLowerCase() === 'quit') {
        stopSearch = true;
    } else if (search.toLowerCase() === 'list') {
        print(inStock.join(', '));
    } else {
        searchString(search);
    }
}
