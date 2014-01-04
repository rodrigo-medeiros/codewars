// Move the first letter of each word to the end of it, then add 'ay' to the end of the word.

// pigIt('Pig latin is cool'); //igPay atinlay siay oolcay

function pigIt(str) {
  var words = str.split(' ');
  return words.map(function (word) {
    var letters = word.split(''),
        firstLetter = letters.shift();
    return letters.join('') + firstLetter + "ay";
  }).join(' ');
}