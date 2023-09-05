import { clearOne } from '.';

describe('clearOne (Function)', () => {
  test('It should remove the last character of the calculation string', () => {
    const calculation = '24+2';
    const newCalculation = clearOne(calculation);

    expect(newCalculation).toBe(calculation.slice(0, calculation.length - 1));
  });
  test('It returns empty string if the calculation string is empty', () => {
    const newCalculation = clearOne('');

    expect(newCalculation).toBe('');
  });
});
