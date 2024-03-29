/**
 * Good morning! Here's your coding interview problem for today.
 * This problem was asked by Uber.
 * Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.
 * For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].
 * Follow-up: what if you can't use division?
 */
const createProductArray = (arr) => {
  const productArr = new Array(arr.length);

  let currentSum = 1;

  for (var i = 0; i < productArr.length; i++) {
    currentSum *= arr[i];
  }

  for (var j = 0; j < productArr.length; j++) {
    productArr[j] = currentSum / arr[j];
  }

  return productArr;
};

test("Does it create correct array?", () => {
  expect(createProductArray([1, 4, 5, 7, 3])).toEqual([420, 105, 84, 60, 140]);
  expect(createProductArray([5, 4, 8, 2, 7])).toEqual([
    448, 560, 280, 1120, 320,
  ]);
  expect(createProductArray([1, 2, 3, 4, 5])).toEqual([120, 60, 40, 30, 24]);
  expect(createProductArray([3, 2, 1])).toEqual([2, 3, 6]);
});
