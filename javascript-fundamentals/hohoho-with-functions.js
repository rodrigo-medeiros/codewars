// Santa is learning programming.
// And what could be the first program, he wants to write?
// Yes, the "Hello world!" of Christmas: "Ho Ho Ho!".
// He wants to write a function ho(), which should have the following return values:

// ho(); // should return "Ho!"
// ho(ho()); // should return "Ho Ho!"
// ho(ho(ho())); // should return "Ho Ho Ho!"
// Unfortunately he couldn't find any tutorial, which explains, how he could implement that. Can you help him?

// Rules:

// each call of ho() must add a "Ho" to the string
// the "Ho"'s must be separated by a space
// at the end of the string, there must be an exclamation mark (!), without a space

function ho () {
  var name = arguments.callee.name,
      capitalized = name.charAt(0).toUpperCase() + name.slice(1);
  return arguments.length > 0 ? capitalized + " " + arguments[0] : capitalized + "!";
}