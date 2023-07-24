import { isEndsWith } from '.';

describe('isEndsWith (Utility Function)', () => {
  test('It should throw an error if the length of check string is not one', () => {
    expect(() => isEndsWith('883-58', '897')).toThrowError('must be one');
  });
  test('It should return false if the last character of the calculation string is not the given check string', () => {
    const check = isEndsWith('234/21', '0');

    expect(check).toBe(false);
  });
  test('It should return true if the last character of the calculation string is the given check string', () => {
    const check = isEndsWith('13*97', '7');

    expect(check).toBe(true);
  });
});
