describe ("'Basic Calculator' kata tests", function () {

  var Calculator = require("../basic-js-building-a-calculator");

  it("should return 5", function () {
    var result = Calculator.add(1, 4);
    expect(result).toBe(5);
  });

  it("should return 5", function () {
    var result = Calculator.subtract(8, 3);
    expect(result).toBe(5);
  });

  it("should return -5", function () {
    var result = Calculator.subtract(3, 8);
    expect(result).toBe(-5);
  });

  it("should return 24", function () {
    var result = Calculator.multiply(8, 3);
    expect(result).toBe(24);
  });

  it("should return 0", function () {
    var result = Calculator.multiply(8, 0);
    expect(result).toBe(0);
  });

  it("should return 12", function () {
    var result = Calculator.divide(24, 2);
    expect(result).toBe(12);
  });

  it("should return 'false'", function () {
    var result = Calculator.divide(24, 0);
    expect(result).toBe(false);
  });

});