function GetArrayInfo () {

  var minimumValue,
      maximumValue,
      numberOfElements,
      average,

      getMinimumValue = input => {
        var minimum = input[0];

        input.forEach(item => {
          if (item < minimum) {
            minimum = item;
          }
        });

        return minimum;
      },

      getMaximumValue = input => {
        var maximum = input[0];

        input.forEach(item => {
          if (item > maximum) {
            maximum = item;
          }
        });

        return maximum;
      },

      getNumberOfElements = input => {
        return input.length;
      },

      getAverage = input => {
        return input.reduce((sum, item) => {
          return sum + item;
        }) / getNumberOfElements(input);
      };

  this.process = input => {
    if (!input || !input.length) {
      throw new Error("Input array is empty or undefined.");
    }

    return {
      minimumValue: getMinimumValue(input),
      maximumValue: getMaximumValue(input),
      numberOfElements: getNumberOfElements(input),
      average: getAverage(input)
    };
  };

  return this;

}

export default GetArrayInfo;
