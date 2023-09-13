import { clearOne } from '.';

describe('clearOne (Function)', () => {
  test('It returns empty string if the calculation is empty', () => {
    const newCalculation = clearOne('');

    expect(newCalculation).toBe('');
  });
  test('It should remove the scientific notation part of the calculation if the calculation ends with a scientific notation', () => {
    const newCalculation1 = clearOne('1.0574088782962046e+21');
    const newCalculation2 = clearOne('2*5.486054209585756e+24');

    expect(newCalculation1).toBe('1.0574088782962046');
    expect(newCalculation2).toBe('2*5.486054209585756');
  });
  test('It should remove the entire "Infinity" text if the calculation ends with the text "Infinity"', () => {
    const newCalculation1 = clearOne('Infinity');
    const newCalculation2 = clearOne('234/22*23+Infinity');

    expect(newCalculation1).toBe('');
    expect(newCalculation2).toBe('234/22*23+');
  });
  test('It should remove the last character of the calculation', () => {
    const calculation = '24+2';
    const newCalculation = clearOne(calculation);

    expect(newCalculation).toBe(calculation.slice(0, calculation.length - 1));
  });
});
