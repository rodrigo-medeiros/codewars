// Create a function christmasTree(height) that returns a christmas tree of the correct height

// christmasTree(5) should return:

//     *
//    ***
//   *****
//  *******
// *********
// Height passed is always an integer between 0 and 100.

// Use \n for newlines between each line.

// Pad with spaces so each line is the same length. The last line having only stars, no spaces.

function christmasTree (height) {
  var tree = "";
  for (var i = 0; i < height; i++) {
    for (var j = 0; j < height - i - 1; j++) tree += ' ';
    for (var k = j; k < j + (i * 2 + 1); k++) tree += '*';
    for (var l = k; l < height * 2 - 1; l++) tree += ' ';
    if (i + 1 < height) tree += '\n';
  }
  return tree;
}