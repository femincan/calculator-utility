import { clearOne } from '.';

describe('clearOne (Function)', () => {
  test('It should remove the last character of the calculation string', () => {
    const calculationString = '24+2';
    const newCalculationString = clearOne(calculationString);

    expect(newCalculationString).toBe(
      calculationString.slice(0, calculationString.length - 1),
    );
  });
  test('It returns empty string if the calculation string is empty', () => {
    const newCalculationString = clearOne('');

    expect(newCalculationString).toBe('');
  });
});
