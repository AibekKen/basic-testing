// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

const testCases = [
  { a: 1, b: 2, action: Action.Add, expected: 3 },
  { a: 2, b: 2, action: Action.Add, expected: 4 },
  { a: 3, b: 2, action: Action.Add, expected: 5 },
  { a: 10, b: 5, action: Action.Subtract, expected: 5 },
  { a: 1, b: 2, action: Action.Subtract, expected: -1 },
  { a: 3, b: 2, action: Action.Subtract, expected: 1 },
  { a: 2, b: 5, action: Action.Multiply, expected: 10 },
  { a: 3, b: 3, action: Action.Multiply, expected: 9 },
  { a: 1, b: 1, action: Action.Multiply, expected: 1 },
  { a: 10, b: 5, action: Action.Divide, expected: 2 },
  { a: 3, b: 3, action: Action.Divide, expected: 1 },
  { a: 10, b: 1, action: Action.Divide, expected: 10 },
  { a: 5, b: 2, action: Action.Exponentiate, expected: 25 },
  { a: 2, b: 3, action: Action.Exponentiate, expected: 8 },
  { a: 10, b: 0, action: Action.Exponentiate, expected: 1 },
  { a: false, b: 2, action: Action.Exponentiate, expected: null },
  { a: 2, b: 'a', action: Action.Exponentiate, expected: null },
  { a: 10, b: 0, action: 'Invalid', expected: null },
];

describe('simpleCalculator', () => {
  // This test case is just to run this test suite, remove it when you write your own tests
  test.each(testCases)(
    'Result of simpleCalculator with params { a: %s, b: %s, action:%s } should be %s',
    ({ a, b, action, expected }) => {
      const result = simpleCalculator({ a, b, action });
      expect(result).toBe(expected);
    },
  );
  // Consider to use Jest table tests API to test all cases above
});
