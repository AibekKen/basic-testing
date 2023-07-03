// Uncomment the code below and write your tests
import path from 'path';
import fs from 'node:fs';
import fsPromises from 'node:fs/promises';
import { readFileAsynchronously, doStuffByTimeout, doStuffByInterval } from '.';

describe('doStuffByTimeout', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
    jest.resetAllMocks();
  });

  test('should set timeout with provided callback and timeout', () => {
    // Write your test here
    jest.spyOn(global, 'setTimeout');
    const timeout = 1000;
    const callback = jest.fn(() => null);
    doStuffByTimeout(callback, timeout);
    expect(setTimeout).toHaveBeenLastCalledWith(callback, timeout);
  });

  test('should call callback only after timeout', () => {
    // Write your test here
    const timeout = 1000;
    const callback = jest.fn(() => null);
    doStuffByTimeout(callback, timeout);
    expect(callback).not.toBeCalled();
    jest.runAllTimers();
    expect(callback).toBeCalled();
    expect(callback).toBeCalledTimes(1);
  });
});

describe('doStuffByInterval', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('should set interval with provided callback and timeout', () => {
    // Write your test here
    jest.spyOn(global, 'setInterval');
    const timeout = 1000;
    const callback = jest.fn(() => null);
    doStuffByInterval(callback, timeout);
    expect(setInterval).toHaveBeenLastCalledWith(callback, timeout);
  });

  test('should call callback multiple times after multiple intervals', () => {
    // Write your test here
    const timeout = 1000;
    const callback = jest.fn(() => null);
    doStuffByInterval(callback, timeout);
    jest.advanceTimersByTime(2000);
    expect(callback).toBeCalledTimes(2);
  });
});

describe('readFileAsynchronously', () => {
  test('should call join with pathToFile', async () => {
    // Write your test here
    const testPath = 'test';

    const spyJoin = jest.spyOn(path, 'join');
    await readFileAsynchronously(testPath);
    expect(spyJoin).toHaveBeenCalledWith(expect.any(String), testPath);
  });

  test('should return null if file does not exist', async () => {
    // Write your test here

    jest.spyOn(fs, 'existsSync').mockReturnValueOnce(false);
    const testPath = 'test';
    const result = await readFileAsynchronously(testPath);
    expect(result).toBeNull();
  });

  test('should return file content if file exists', async () => {
    // Write your test here
    const testPath = 'test';
    const testContent = 'testContent';
    jest.spyOn(fs, 'existsSync').mockReturnValueOnce(true);
    jest.spyOn(fsPromises, 'readFile').mockResolvedValue(testContent);
    const result = await readFileAsynchronously(testPath);
    expect(result).toBe(testContent);
  });
});
