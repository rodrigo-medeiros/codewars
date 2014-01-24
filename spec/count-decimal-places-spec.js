describe("'Count decimal places' kata tests", function () {

  var decimalPlaces = require("../count-decimal-places");

  it("should return the correct value for two simple decimal places'", function () {
    var result = decimalPlaces(3.14);
    expect(result).toBe(2);
  });

  it("should return the correct value for value with non-truncated zeroes and -14 places in cientific notation", function () {
    var result = decimalPlaces(2.e-14);
    expect(result).toBe(14);
  });

  it("should return the correct value for 23 decimal places: 2 decimal places plus -21 in cientific notation", function () {
    var result = decimalPlaces(-3.14e-21);
    expect(result).toBe(23);
  });

  it("should return the correct value for NaN", function () {
    var result = decimalPlaces(NaN);
    expect(result).toBe(0);
  });

  it("should return the correct value for Infinity", function () {
    var result = decimalPlaces(Infinity);
    expect(result).toBe(0);
  });
});