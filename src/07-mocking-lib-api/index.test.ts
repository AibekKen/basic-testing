// Uncomment the code below and write your tests
import axios, { AxiosInstance } from 'axios';
import { throttledGetDataFromApi } from './index';

jest.mock('axios');

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.useRealTimers();
});

describe('throttledGetDataFromApi', () => {
  test('should create instance with provided base url', async () => {
    // Write your test here
    const testPath = '/posts';
    const mockedAxiosInstance: Partial<AxiosInstance> = {
      get: jest.fn().mockResolvedValue({ data: 'test data' }),
    };
    const spyCreate = jest
      .spyOn(axios, 'create')
      .mockReturnValue(mockedAxiosInstance as AxiosInstance);
    await throttledGetDataFromApi(testPath);
    jest.runAllTimers();
    expect(spyCreate).toHaveBeenCalledWith({
      baseURL: 'https://jsonplaceholder.typicode.com',
    });
  });

  test('should perform request to correct provided url', async () => {
    // Write your test here

    const testPath = '/posts';
    const mockedAxiosInstance: Partial<AxiosInstance> = {
      get: jest.fn().mockResolvedValue({ data: 'test data' }),
    };

    jest
      .spyOn(axios, 'create')
      .mockReturnValue(mockedAxiosInstance as AxiosInstance);

    await throttledGetDataFromApi(testPath);
    jest.runAllTimers();
    expect(mockedAxiosInstance.get).toBeCalledWith(testPath);
  });

  test('should return response data', async () => {
    // Write your test here
    const testPath = '/posts';
    const testData = 'test data';
    const mockedAxiosInstance: Partial<AxiosInstance> = {
      get: jest.fn().mockResolvedValue({ data: testData }),
    };

    jest
      .spyOn(axios, 'create')
      .mockReturnValue(mockedAxiosInstance as AxiosInstance);

    const result = await throttledGetDataFromApi(testPath);
    jest.runAllTimers();
    expect(result).toBe(testData);
  });
});
