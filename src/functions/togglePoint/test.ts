import { togglePoint } from '.';

describe('togglePoint (Function)', () => {
  test('It should remove the point if the last character is a point', () => {
    const newCalculationString = togglePoint('24+7.');

    expect(newCalculationString).toBe('24+7');
  });
  test('It should remove the point and the zero if the last two characters are a zero and point', () => {
    const newCalculationString = togglePoint('83/0.');

    expect(newCalculationString).toBe('83/');
  });
  test('It should not add a point if the last number is a decimal number', () => {
    const calculationString = '76-3.83';

    const newCalculationString = togglePoint(calculationString);

    expect(newCalculationString).toBe(calculationString);
  });
  test('It should add a zero and point at the beginning if the calculation string is empty', () => {
    const newCalculationString = togglePoint('');

    expect(newCalculationString).toBe('0.');
  });
  test('It should add a zero and point if the last character is an operator', () => {
    const newCalculationString = togglePoint('23-');

    expect(newCalculationString).toBe('23-0.');
  });
  test('It should add point if the last character is a whole number', () => {
    const newCalculationString = togglePoint('71-2');

    expect(newCalculationString).toBe('71-2.');
  });
});
