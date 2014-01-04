// Extend the String prototype by a trim function, that returns the string with leading or trailing whitespaces removed.

// Examples can be found in the test fixture.

// PS: Of course, the original trim function was removed before ;)

String.prototype.trim = function () {
  return this.replace(/^\s+|\s+$/g, "");
}