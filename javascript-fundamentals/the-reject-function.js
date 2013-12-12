// Let's implement the reject() function...

// var odds = reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
// => [1, 3, 5]

function reject(array, iterator) {
  var result = [];
  array.forEach(function(item) {
    if (!iterator.call(this, item)) result.push(item);
  });
  return result;
}