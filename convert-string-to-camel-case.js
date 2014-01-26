// Complete the method/function so that it converts dash/underscore delimited words into camel casing.
// The first word within the output should be capitalized only if the original word was capitalized.

// Examples:

// // returns "theStealthWarrior"
// toCamelCase("the-stealth-warrior")

// // returns "TheStealthWarrior"
// toCamelCase("The_Stealth_Warrior")

module.exports = function toCamelCase(string) {
  var cleanString = string.replace(/_|-/g, " ");
  if (cleanString[0]  && cleanString.length > 1) {
    return [cleanString.split(" ")[0]].concat(cleanString.split(" ").slice(1, cleanString.length).map(function (word) {
      return word.replace(/^[A-Za-z]/, word[0].toUpperCase());
    })).join("");
  }
  return cleanString;
};