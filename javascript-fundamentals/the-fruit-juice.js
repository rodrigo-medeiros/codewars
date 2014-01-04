// In this kata we mix some tasty fruit juice.
// We can add some components with certain amounts.
// Sometimes we pour out a bit of our juice.
// Then we want to find out, which concentrations our fruit juice has.

// Example:

// You take an empty jar for your juice
// Whenever the jar is empty, the concentrations are always 0
// Now you add 200 units of apple juice
// And then you add 200 units of banana juice
// Now the concentration of apple juice is 0.5 (50%)
// Then you pour out 200 units
// The concentration of apple juice is still 50%
// Then you add 200 units of apple juice again
// Now the concentration of apple juice is 0.75, while the concentration of banana juice is only 0.25 (300 units apple juice + 100 units banana juice)
// Complete the functions in order to provide this functionality.
// The test code for the example above can be found in the test fixture.

function Jar() {
  this.types = {
    length: 0
  };
  this.totalAmount = 0;
}

Jar.prototype.add = function (amount, type) {
  if (!this.types[type]) {
    this.types[type] = 0;
    this.types.length += 1;
  }
  this.types[type] += amount;
  this.totalAmount += amount;
};

Jar.prototype.pourOut = function (amount) {
  var amountPerType = amount / this.types.length,
    type;
  for (type in this.types) {
    if (type !== 'length') {
      this.types[type] -= amountPerType;
    }
  }
  this.totalAmount -= amount;
};

Jar.prototype.getTotalAmount = function () {
  return this.totalAmount;
};

Jar.prototype.getConcentration = function (type) {
  return !this.types[type] || this.totalAmount === 0 ? 0 : this.types[type] / this.totalAmount;
};