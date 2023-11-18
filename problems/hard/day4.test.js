/**
 * This problem was asked by Stripe.
 * Given an array of integers, find the first missing positive integer in linear time and constant space.
 * In other words, find the lowest positive integer that does not exist in the array.
 * The array can contain duplicates and negative numbers as well.
 * For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.
 * You can modify the input array in-place.
 *
 * )= Solution taken from https://www.geeksforgeeks.org/find-the-smallest-positive-number-missing-from-an-unsorted-array-set-2/
 */

// O(n) and Space(1)
const findMinimumPositiveInteger = (arr) => {
  let n = arr.length;
  let val;
  let nextVal;

  for (let i = 0; i < n; i++) {
    if (arr[i] <= 0 || arr[i] > n) continue;

    val = arr[i];

    while (arr[val - 1] !== val) {
      nextVal = arr[val - 1];
      arr[val - 1] = val;
      val = nextVal;
      if (val <= 0 || val > n) break;
    }
  }

  for (let i = 0; i < n; i++) {
    if (arr[i] != i + 1) {
      return i + 1;
    }
  }

  return n + 1;
};

test("Does it find the minimum positive integer correctly?", () => {
  expect(findMinimumPositiveInteger([3, 4, -1, 1])).toBe(2);
  expect(findMinimumPositiveInteger([2, 2, -2, -6, 7, 8, 0])).toBe(1);
  expect(findMinimumPositiveInteger([-21, 9, 4, 1, 6, 2, 0])).toBe(3);
  expect(findMinimumPositiveInteger([1, 2, 0])).toBe(3);
  expect(
    findMinimumPositiveInteger([7, -7, 8, 9, -23, 0, 1, 5, 2, -7, 3])
  ).toBe(4);
});
