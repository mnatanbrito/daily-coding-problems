/**
 * This problem was asked by Jane Street.
 * cons(a, b) constructs a pair, and car(pair) and cdr(pair) returns the first and last element of that pair.
 * For example, car(cons(3, 4)) returns 3, and cdr(cons(3, 4)) returns 4.
 * Given this implementation of cons:
 * def cons(a, b):
    def pair(f):
        return f(a, b)
    return pair
    
    Implement car and cdr.
 */

const cons = (a, b) => (fn) => {
  return fn(a, b);
};

const car = (pairFn) => {
  const [a, _] = pairFn((a, b) => [a, b]);

  return a;
};

const cdr = (pairFn) => {
  const [a, b] = pairFn((a, b) => [a, b]);

  return b;
};

test("Does car and cdr work correctly?", () => {
  expect(car(cons(1, 2))).toBe(1);
  expect(car(cons(-2, 9))).toBe(-2);
  expect(car(cons("a", "!"))).toBe("a");
  expect(cdr(cons(1, 2))).toBe(2);
  expect(cdr(cons(-2, 9))).toBe(9);
  expect(cdr(cons("a", "!"))).toBe("!");
});
