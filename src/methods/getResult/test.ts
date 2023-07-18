import { getResult } from '.';

describe('getResult (Method)', () => {
  test('If there is an operator end of the calculation string, it should removes it and returns the result', () => {
    const result = getResult('10+4-3*3+');

    expect(result).toBe(5);
  });
  test('It should returns the result of the calculation string', () => {
    const result = getResult('37+2-2*3+6/2');

    expect(result).toBe(36);
  });
});
