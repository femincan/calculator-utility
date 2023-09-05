import { getResult } from '.';

describe('getResult (Function)', () => {
  const errorString = 'unsupported format';

  test('It should throw error if the calculation string is invalid', () => {
    expect(() => getResult('console.log("Hello World")')).toThrowError(
      errorString,
    );
  });
  test('It should throw error if the calculation string is validated but it is unsupported for eval function', () => {
    expect(() => getResult('24+++')).toThrowError(errorString);
  });
  test('If there is one or two operators at the end of the calculation string, it should removes them and returns the result', () => {
    const result1 = getResult('10+4-3*3+');
    const result2 = getResult('2+2*-');

    expect(result1).toBe('5');
    expect(result2).toBe('4');
  });
  test('It should returns the result of the calculation string', () => {
    const result = getResult('37+2-2*3+6/2');

    expect(result).toBe('36');
  });
});
