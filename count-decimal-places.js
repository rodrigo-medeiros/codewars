// Can you write an algorithm to determine the number of decimal places of a number?

// decimalPlaces(3.14); //yields 2
// decimalPlaces(2.e-14); //yields 14
// decimalPlaces(-3.14e-21); //yields 23
// decimalPlaces(10.75); //yields 2
// decimalPlaces(NaN); //yields 0
// decimalPlaces(Infinity); //yields 0

// Consider the decimal places to be the number of digits after the decimal
//  separator when the number is expressed in ordinary decimal notation.

module.exports = function decimalPlaces(n) {
  if (isNaN(n) || n === Infinity) {
    return 0;
  }
  var arr = n.toString().split('e'),
      count = 0;
  if (arr.length > 1) {
    count += Math.abs(arr[1]);
    arr = arr[0].split('.');
    if (arr.length > 1) {
      count += arr[1].length;
    }
  } else {
    arr = arr[0].split('.');
    if (arr.length > 0) {
      count += arr[1].length;
    }
  }
  return count;
}