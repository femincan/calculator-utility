import { addDecimal } from '.';

describe('addDecimal (Function)', () => {
  test('It should do nothing if the last character is a point', () => {
    const calculation = '24+7.';
    const newCalculation = addDecimal(calculation);

    expect(newCalculation).toBe(calculation);
  });
  test('It should do nothing if the last two characters are a zero and point', () => {
    const calculation1 = '83/0.';
    const calculation2 = '200.';
    const newCalculation1 = addDecimal(calculation1);
    const newCalculation2 = addDecimal(calculation2);

    expect(newCalculation1).toBe(calculation1);
    expect(newCalculation2).toBe(calculation2);
  });
  test('It should not add a point if the last number is a decimal number', () => {
    const calculation = '76-3.83';

    const newCalculation = addDecimal(calculation);

    expect(newCalculation).toBe(calculation);
  });
  test('It should add a zero and point at the beginning if the calculation string is empty', () => {
    const newCalculation = addDecimal('');

    expect(newCalculation).toBe('0.');
  });
  test('It should add a zero and point if the last character is an operator', () => {
    const newCalculation = addDecimal('23-');

    expect(newCalculation).toBe('23-0.');
  });
  test('It should add point if the last character is a whole number', () => {
    const newCalculation = addDecimal('71-2');

    expect(newCalculation).toBe('71-2.');
  });
});
