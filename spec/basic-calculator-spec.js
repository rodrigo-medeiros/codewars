describe ("'Basic Calculator' kata tests", function () {

  var basicCalculator = require("../basic-calculator");

  it("should return 6", function () {
    var result = basicCalculator(2,"+", 4);
    expect(result).toBe(6);
  });

  it("should return 4.5", function () {
    var result = basicCalculator(6,"-", 1.5);
    expect(result).toBe(4.5);
  });

  it("should return -32", function () {
    var result = basicCalculator(-4,"*", 8);
    expect(result).toBe(-32);
  });

  it("should return -7", function () {
    var result = basicCalculator(49,"/", -7);
    expect(result).toBe(-7);
  });

  it("should return null", function () {
    var result = basicCalculator(8,"m", 2);
    expect(result).toBe(null);
  });

  it("should return null", function () {
    var result = basicCalculator(4,"/",0);
    expect(result).toBe(null);
  });

});