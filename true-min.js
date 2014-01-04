// The Math.min function has stopped working, so we have to use our own function.
// We are off to a good start, but this function doesn't seem to handle everything properly:

// function min(a, b){
//   return (a<b)?a:b;
// }

// Add in the proper checks to return NaN for anything that isn't an actual number.

// Note: This min function need not handle more than two arguments.

function min(a, b){
  if (isNaN(a) || isNaN(b)) {
    return NaN;
  }
  if (a === null) {
    a = 0;
  }
  if (b === null) {
    b = 0;
  }
  return (a < b) ? a : b;
}