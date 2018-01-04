var playlist = [];
playlist.push('I did it my way');

// adds an item to the end of an array

playlist.push('Respect', 'Imagine');
// adds an item to the beginning of an array

playlist.unshift('Born to run');
playlist.unshift('Happy New Years', "Born to PooPoo", "Don't run with a fork");
// returns the first item from an array and deletes it
playlist.shift();
// returns the last item from an array and deletes it
playlist.pop();

printList(playlist);

