// Write a reverseWords function that accepts a string a parameter, and reverses each word in the string.

// Example:

// reverseWords("This is an example!"); // returns  "sihT si na !elpmaxe"

function reverseWords (str) {
  return str.split(' ').map(function (item) {
    return item.split('').reverse().join('');
  }).join(' ');
}