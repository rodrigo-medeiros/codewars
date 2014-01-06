// Write a
// function called sumIntervals that accepts an array of intervals, and returns the sum of all the interval lengths.
// Overlapping intervals should only be counted once.

// Intervals

// Intervals are represented by a pair of integers in the form of an array.
// The first value of the interval will always be less than the second value.
// Interval example: [1, 5] is an interval from 1 to 5.The length of this interval is 4.

// Overlapping Intervals

// List containing overlapping intervals:

// [
//     [1, 4],
//     [7, 10],
//     [3, 5]
// ]
// The sum of the lengths of these intervals is 7.Since[1, 4] and[3, 5] overlap,
// we can treat the interval as[1, 5],
// which has a length of 4.

// Examples:

// sumIntervals([
//     [1, 2],
//     [6, 10],
//     [11, 15]
// ]); //=> returns 9

// sumIntervals([
//     [1, 4],
//     [7, 10],
//     [3, 5]
// ]); //=> returns 7

// sumIntervals([
//     [1, 5],
//     [10, 20],
//     [1, 6],
//     [16, 19],
//     [5, 11]
// ]); //=> returns 19

function sumIntervals(intervals) {
  var total = 0,
    i;
  intervals = intervals.sort(function (a, b) {
    return a[0] > b[0];
  });
  if (intervals.length > 1) {
    for (i = 1; i < intervals.length; i++) {
      if (intervals[i - 1][0] <= intervals[i][0] &&
            intervals[i][0] <= intervals[i - 1][1]) {
        if (intervals[i - 1][1] < intervals[i][1]) {
          intervals[i - 1][1] = intervals[i][1];
        }
        intervals.splice(i, 1);
        i--;
      }
    }
  }
  for (i = 0; i < intervals.length; i++) {
    total += intervals[i][1] - intervals[i][0];
  }
  return total;
}