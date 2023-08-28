import { addDecimal } from '.';

describe('addDecimal (Function)', () => {
  test('It should do nothing if the last character is a point', () => {
    const calculationString = '24+7.';
    const newCalculationString = addDecimal(calculationString);

    expect(newCalculationString).toBe(calculationString);
  });
  test('It should do nothing if the last two characters are a zero and point', () => {
    const calculationString1 = '83/0.';
    const calculationString2 = '200.';
    const newCalculationString1 = addDecimal(calculationString1);
    const newCalculationString2 = addDecimal(calculationString2);

    expect(newCalculationString1).toBe(calculationString1);
    expect(newCalculationString2).toBe(calculationString2);
  });
  test('It should not add a point if the last number is a decimal number', () => {
    const calculationString = '76-3.83';

    const newCalculationString = addDecimal(calculationString);

    expect(newCalculationString).toBe(calculationString);
  });
  test('It should add a zero and point at the beginning if the calculation string is empty', () => {
    const newCalculationString = addDecimal('');

    expect(newCalculationString).toBe('0.');
  });
  test('It should add a zero and point if the last character is an operator', () => {
    const newCalculationString = addDecimal('23-');

    expect(newCalculationString).toBe('23-0.');
  });
  test('It should add point if the last character is a whole number', () => {
    const newCalculationString = addDecimal('71-2');

    expect(newCalculationString).toBe('71-2.');
  });
});
