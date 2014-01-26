// You are writing an app that displays a fixed width font and has a strict limit of 25 characters per line in one particular text area.

// Write a function that takes in a string, inserts newline characters,
// and adds a hyphen on the end of a line if a word is continued on the next line.

// White space should be left in the result string as is.

// Test Fixture Cut-n-Paste:

// var input = "The quick brown fox jumped over the lazy developer.";
// var expectedResult ="The quick brown fox jump-\ned over the lazy develop-\ner.";
// var result = wordWrap(input);
// Test.expect(result === expectedResult);

var wordWrap = function (str) {
  var strArray = str.split(""),
      index = 0;
  while (index < strArray.length) {
    if (index && index % 25 === 0) {
      strArray[index - 1] === " " || strArray[index] === " " ? strArray.splice(index, 0, "\n") : strArray.splice(index - 1, 0, "-\n");
    }
    index++;
  }
  return strArray.join("");
};

module.exports = wordWrap;