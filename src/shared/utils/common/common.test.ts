import { hasValue, shuffleArray } from 'src/shared/utils';

describe('Common utils', () => {
  describe('hasValue', () => {
    test('Number 0', () => {
      expect(hasValue(0)).toBe(true);
    });

    test('Number greater than zero', () => {
      expect(hasValue(10)).toBe(true);
    });

    test('Number less than zero', () => {
      expect(hasValue(-10)).toBe(true);
    });

    test('Empty array', () => {
      expect(hasValue([])).toBe(false);
    });

    test('Array of numbers', () => {
      expect(hasValue([1, 3, 8, 9])).toBe(true);
    });

    test('Null', () => {
      expect(hasValue(null)).toBe(false);
    });

    test('Undefined', () => {
      expect(hasValue(undefined)).toBe(false);
    });
  });

  describe('shuffleArray', () => {
    test('Empty array', () => {
      expect(shuffleArray([])).toEqual([]);
    });

    test('Array of numbers', () => {
      expect(shuffleArray([1, 2, 3])).not.toEqual([1, 2, 3]);
    });

    test('Array of strings', () => {
      expect(shuffleArray(['a', 'b', 'c'])).not.toEqual(['a', 'b', 'c']);
    });

    test('Array of objects', () => {
      expect(shuffleArray([{ value: 'a' }, { value: 'b' }, { value: 'c' }])).not.toEqual([
        { value: 'a' },
        { value: 'b' },
        { value: 'c' },
      ]);
    });

    test('Array of arrays', () => {
      expect(shuffleArray([[1], [2], [3]])).not.toEqual([[1], [2], [3]]);
    });
  });
});
