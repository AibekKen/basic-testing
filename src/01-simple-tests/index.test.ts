// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    // Write your test here
    const result = simpleCalculator({
      a: 1,
      b: 2,
      action: Action.Add,
    });
    expect(result).toBe(3);
  });

  test('should subtract two numbers', () => {
    // Write your test here
    const result = simpleCalculator({
      a: 5,
      b: 3,
      action: Action.Subtract,
    });
    expect(result).toBe(2);
  });

  test('should multiply two numbers', () => {
    // Write your test here
    const result = simpleCalculator({
      a: 5,
      b: 2,
      action: Action.Multiply,
    });
    expect(result).toBe(10);
  });

  test('should divide two numbers', () => {
    // Write your test here
    const result = simpleCalculator({
      a: 20,
      b: 4,
      action: Action.Divide,
    });
    expect(result).toBe(5);
  });

  test('should exponentiate two numbers', () => {
    // Write your test here
    const result = simpleCalculator({
      a: 4,
      b: 2,
      action: Action.Exponentiate,
    });
    expect(result).toBe(16);
  });

  test('should return null for invalid action', () => {
    // Write your test here
    const result = simpleCalculator({
      a: 4,
      b: 2,
      action: 'INVALID',
    });
    expect(result).toBeNull();
  });

  test('should return null for invalid arguments', () => {
    // Write your test here
    const result = simpleCalculator({
      a: 'INVALID',
      b: false,
      action: Action.Multiply,
    });
    expect(result).toBeNull();
  });
});
