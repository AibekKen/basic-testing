// Uncomment the code below and write your tests
import { generateLinkedList } from './index';

describe('generateLinkedList', () => {
  // Check match by expect(...).toStrictEqual(...)
  test('should generate linked list from values 1', () => {
    // Write your test here
    const compareObj = {
      next: {
        next: {
          next: {
            next: null,
            value: null,
          },
          value: 3,
        },
        value: 2,
      },
      value: 1,
    };
    const linkedList = generateLinkedList([1, 2, 3]);
    expect(linkedList).toStrictEqual(compareObj);
  });

  // Check match by comparison with snapshot
  test('should generate linked list from values 2', () => {
    // Write your test here
    const linkedList = generateLinkedList([2, 3, 4]);
    expect(linkedList).toMatchSnapshot();
  });
});
