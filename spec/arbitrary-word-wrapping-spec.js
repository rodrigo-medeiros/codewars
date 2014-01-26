describe("'Arbitrary word wrapping' kata tests", function () {

  var wordWrap = require("../arbitrary-word-wrapping");

  it("shoud return 'The quick brown fox jump-\ned over the lazy develop-\ner.'", function () {
    var result = wordWrap("The quick brown fox jumped over the lazy developer.");
    expect(result).toBe("The quick brown fox jump-\ned over the lazy develop-\ner.");
  });

  it("shoud return 'I have jumped over a car \nand kept running.'", function () {
    var result = wordWrap("I have jumped over a car and kept running.");
    expect(result).toBe("I have jumped over a car \nand kept running.");
  });

  it("shoud return 'I have jumped over a goat\n and kept running.'", function () {
    var result = wordWrap("I have jumped over a goat and kept running.");
    expect(result).toBe("I have jumped over a goat\n and kept running.");
  });

});