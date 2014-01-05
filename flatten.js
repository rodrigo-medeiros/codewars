// Write a function that flattens an Array of Array objects into a flat Array.
// Your function must only do one level of flattening.

// flatten([1,2,3]) // => [1,2,3]
// flatten([[1,2,3],["a","b","c"],[1,2,3]])  // => [1,2,3,"a","b","c",1,2,3]
// flatten([[[1,2,3]]]) // => [[1,2,3]]

var flatten = function (lol) {
  var result = [];
  lol.forEach(function (lev1) {
    if (lev1 instanceof Array) {
      lev1.forEach(function (lev2) {
        result.push(lev2);
      });
    } else {
      result.push(lev1);
    }
  });
  return result;
};