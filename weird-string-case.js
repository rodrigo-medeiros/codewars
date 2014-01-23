// Description:

// Write a function toWeirdCase that accepts a string,
// and returns the same string with all even indexed characters in each word upper cased,
// and all odd indexed characters in each word lower cased.
// The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased.

// The passed in string will only consist of alphabetical characters and spaces(' ').
// Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

// Examples:

// Javascript/CoffeeScript:

// toWeirdCase( "String" );//=> returns "StRiNg"
// toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"

function toWeirdCase(string) {
  return string.split(' ').map(function (word) {
    var index = 0;
    return string.split('').map(function (letter, index) {
      if (index === 0 || index % 2 === 0) {
        index++;
        return letter.toUpperCase();
      }
      index++;
      return letter.toLowerCase();
    }).join('');
  }).join(' ');
}