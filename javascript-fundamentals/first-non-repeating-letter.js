// Write a function named firstNonRepeatingCharacter that takes a string input, 
// and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', 
// since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, 
// but the function should return the correct case for the initial letter.
// For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return the empty string ('').

function firstNonRepeatingLetter(s) {
  var length = s.length,
      repeated = {};
  for (var i = 0; i < length; i++) {
    for (var j = i + 1; j < length; j++) {
      if (s[i].toLowerCase() === s[j].toLowerCase()) {
        repeated[s[i].toLowerCase()] = true;
        break;
      }
    }
    if (!repeated[s[i].toLowerCase()]) return s[i];
  }
  return '';
}