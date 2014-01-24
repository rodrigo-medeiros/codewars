describe("'Weird string case' kata tests", function () {

  var toWeirdCase = require("../weird-string-case");

  it("should return the correct value for a single word", function () {
    var result = toWeirdCase("String");
    expect(result).toBe("StRiNg");
  });

  it("should return the correct value to multiple words, with one ' ' in between", function () {
    var sentences = {
      "This is a test": "ThIs Is A TeSt",
      "Should return the correct value": "ShOuLd ReTuRn ThE CoRrEcT VaLuE",
      "Multiple words": "MuLtIpLe WoRdS"
    };

    for (var key in sentences) {
      var result = toWeirdCase(key);
      expect(result).toBe(sentences[key]);
    }
  });
});