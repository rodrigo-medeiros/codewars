import test from 'tape';
import GetArrayInfo from '../get-array-info';


test("Testing a valid array", (assert) => {
  var input = [ 3, 1, -4, 17, 11, 0, -9, 7 ],
      getArrayInfo = new GetArrayInfo(),
      arrayInfo = getArrayInfo.process(input);

  assert.equal(arrayInfo.minimumValue, -9,
    "Given the input array, the minimum value should be -9.");

  assert.equal(arrayInfo.maximumValue, 17,
    "Given the input array, the maximum value should be 17.");

  assert.equal(arrayInfo.numberOfElements, 8,
    "Given the input array, the number of elements should be 8.");

  assert.equal(arrayInfo.average, 3.25,
    "Given the input array, the average should be 3.25.");

  assert.end();
});

test("Testing an empty array", (assert) => {
  var input = [],
    getArrayInfo = new GetArrayInfo();

  assert.throws(getArrayInfo.process, "Input array is empty or undefined.");

  assert.end();
});
