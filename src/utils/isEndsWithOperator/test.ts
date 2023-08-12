import { isEndsWithOperator } from '.';

describe('isEndsWithOperator (Utility Function)', () => {
  test('It should return false if the calculation string is empty', () => {
    const check = isEndsWithOperator('');

    expect(check).toBe(false);
  });
  test('It should return true if there is an operator in the end of the calculation string', () => {
    const check = isEndsWithOperator('3+5-');

    expect(check).toBe(true);
  });
  test('It should return false if there is no operator in the end of the calculation string', () => {
    const check = isEndsWithOperator('7/2');

    expect(check).toBe(false);
  });
});
