describe("'Weird string case' kata tests", function () {

  var toWeirdCase = require("../weird-string-case");

  it("should return 'StRiNg'", function () {
    var result = toWeirdCase("String");
    expect(result).toBe("StRiNg");
  });

  it("should return 'WeIrD StRiNg CaSe'", function () {
    var result = toWeirdCase("Weird string case");
    expect(result).toBe("WeIrD StRiNg CaSe");
  });
});