import { getResult } from '.';

describe('getResult (Function)', () => {
  const errorString = 'unsupported format';

  test('It should throw error if the calculation string is empty', () => {
    expect(() => getResult('')).toThrowError(errorString);
  });
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
    const calculationsAndResults = [
      { calculation: '37+2-2*3+6/2', result: '36' },
      { calculation: 'Infinity/23*34+2', result: 'Infinity' },
      {
        calculation: '999998989*998986622391334234',
        result: '9.98985612415859e+26',
      },
      { calculation: '233+Infinity/232.2234e+23*223', result: 'Infinity' },
    ];

    const result0 = getResult(calculationsAndResults[0].calculation);
    const result1 = getResult(calculationsAndResults[1].calculation);
    const result2 = getResult(calculationsAndResults[2].calculation);
    const result3 = getResult(calculationsAndResults[3].calculation);

    expect(result0).toBe(calculationsAndResults[0].result);
    expect(result1).toBe(calculationsAndResults[1].result);
    expect(result2).toBe(calculationsAndResults[2].result);
    expect(result3).toBe(calculationsAndResults[3].result);
  });
});
