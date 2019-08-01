import test from 'ava';

/**
 * Good morning! Here's your coding interview problem for today.
 * This problem was recently asked by Google.
 * Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
 * For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
 * Bonus: Can you do this in one pass?
 *
 */
const doesAddUpTo = (arr, k) => {
  for (var i = 0; i < (arr || []).length; i++) {
    for (var j = i + 1; j < (arr || []).length; j++) {
      if (arr[i] + arr[j] === k) {
        return true;
      }
    }
  }

  return false;
};

test('Does it add up?', t => {
  t.true(doesAddUpTo([1, 5, 10, 22, 45, 213], 6), 'Does not add up correctly');
  t.true(doesAddUpTo([1, 5, 10, 22, 45, 213], 11), 'Does not add up correctly');
  t.true(doesAddUpTo([1, 5, 10, 22, 45, 213], 23), 'Does not add up correctly');

  t.false(
    doesAddUpTo([1, 5, 10, 22, 45, 213], 13),
    'Does not add up correctly'
  );
  t.false(
    doesAddUpTo([1, 5, 10, 22, 45, 213], 24),
    'Does not add up correctly'
  );
  t.false(
    doesAddUpTo([1, 5, 10, 22, 45, 213], 47),
    'Does not add up correctly'
  );
});
