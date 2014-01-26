describe("'Convert string to camel case' kata tests", function () {

  var toCamelCase = require("../convert-string-to-camel-case");

  it("should return 'theStealthWarrior'", function () {
    var result = toCamelCase("the-stealth-warrior");
    expect(result).toBe("theStealthWarrior");
  });

  it("should return 'theStealthWarrior'", function () {
    var result = toCamelCase("the-stealth_warrior");
    expect(result).toBe("theStealthWarrior");
  });

  it("should return the 'TheStealthWarrior'", function () {
    var result = toCamelCase("The_Stealth_Warrior");
    expect(result).toBe("TheStealthWarrior");
  });

  it("should return the 'TheStealthWarrior'", function () {
    var result = toCamelCase("The-Stealth_Warrior");
    expect(result).toBe("TheStealthWarrior");
  });

  it("should return an empty string", function () {
    var result = toCamelCase("");
    expect(result).toBe("");
  });

  it("should return 'anything'", function () {
    var result = toCamelCase("anything");
    expect(result).toBe("anything");
  });
});