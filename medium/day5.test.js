import test from 'ava';

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

const cons = (a, b) => fn => {
  return fn(a, b);
};

const car = pairFn => {
  const [a, _] = pairFn((a, b) => [a, b]);

  return a;
};

const cdr = pairFn => {
  const [a, b] = pairFn((a, b) => [a, b]);

  return b;
};

test('Does car and cdr work correctly?', t => {
  t.is(car(cons(1, 2)), 1);
  t.is(car(cons(-2, 9)), -2);
  t.is(car(cons('a', '!')), 'a');

  t.is(cdr(cons(1, 2)), 2);
  t.is(cdr(cons(-2, 9)), 9);
  t.is(cdr(cons('a', '!')), '!');
});
