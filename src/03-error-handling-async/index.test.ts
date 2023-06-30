// Uncomment the code below and write your tests
import { throwError, throwCustomError, resolveValue, MyAwesomeError, rejectCustomError } from './index';

describe('resolveValue', () => {
  test('should resolve provided value', async () => {
    // Write your test here
    const value = 10
    const result = await resolveValue(value)
    expect(result).toBe(value)
  });
});

describe('throwError', () => {
  test('should throw error with provided message', () => {
    // Write your test here
    const providedMessage = 'testError'
    expect(() =>  throwError(providedMessage)).toThrowError(providedMessage)
  });

  test('should throw error with default message if message is not provided', () => {
    // Write your test here
    const defaultErrorMsg = 'Oops'
    expect(() => throwError()).toThrow(defaultErrorMsg)
  });
});

describe('throwCustomError', () => {
  test('should throw custom error', () => {
    // Write your test here
    expect(() =>  throwCustomError()).toThrow(MyAwesomeError)
  });
});

describe('rejectCustomError', () => {
  test('should reject custom error', async () => {
    // Write your test here
    expect(()=> rejectCustomError()).rejects.toThrow(MyAwesomeError)
  });
});
