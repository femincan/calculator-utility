import { isEndsWithOperator } from '.';

describe('isEndsWithOperator (Utility Function)', () => {
  test('It should return true if there is an operator in the end of the calculation string', () => {
    const check = isEndsWithOperator('3+5-');

    expect(check).toBeTruthy();
  });
  test('It should return false if there is no operator in the end of the calculation string', () => {
    const check = isEndsWithOperator('7/2');

    expect(check).toBeFalsy();
  });
});
