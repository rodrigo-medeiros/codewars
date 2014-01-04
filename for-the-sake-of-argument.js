// Write a function named numbers that returns true if all the parameters it is passed are numbers.
// Otherwise, the function should return false. The function should accept any number of parameters.

// Example usage:

// numbers(1, 4, 3, 2, 5); ## true
// numbers(1, "a", 3);     ## false

function numbers() {
  var output = [];
  var length = arguments.length;
  for (var i = 0; i < length; i++) {
    output.push(arguments[i]);
  };
  return !output.some(function (item, index, array) {
    return (typeof item !== 'number');
  });
}