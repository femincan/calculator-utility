import { addNumber } from '.';

describe('addNumber (Function)', () => {
  test('It should throw an error if the numberToAdd parameter is not a single-character string that holds a valid numeric value', () => {
    expect(() => addNumber('2432', '24+97')).toThrowError('single-character');
  });
  test('It should not add the given number if the calculation string only contains a single zero and the given number is zero', () => {
    const calculation = '0';
    const newCalculation = addNumber('0', calculation);

    expect(newCalculation).toBe(calculation);
  });
  test('It should replace the zero with the given number if the calculation string only contains a single zero', () => {
    const newCalculation = addNumber('5', '0');

    expect(newCalculation).toBe('5');
  });
  test('It should not add the given number if the calculation string ends with single zero and the given number is zero', () => {
    const calculation = '7*0';
    const newCalculation = addNumber('0', calculation);

    expect(newCalculation).toBe(calculation);
  });
  test('It should replace the zero with the given number if the calculation string ends with a single zero', () => {
    const newCalculation = addNumber('2', '234+0');

    expect(newCalculation).toBe('234+2');
  });
  test('It should add the given number to the empty calculation string', () => {
    const newCalculation = addNumber('9', '');

    expect(newCalculation).toBe('9');
  });
  test('It should add zero if the given number is zero and the last number is a decimal number', () => {
    const newCalculation = addNumber('0', '1+2.00');

    expect(newCalculation).toBe('1+2.000');
  });
  test('It should add the given number to the end of the calculation string', () => {
    const newCalculation = addNumber('5', '2+3');

    expect(newCalculation).toBe('2+35');
  });
});
