import { addNumber } from '.';

describe('addNumber (Method)', () => {
  test('It should add given number to the end of the calculation string', () => {
    const newCalculationString = addNumber(5, '2+3');

    expect(newCalculationString).toBe('2+35');
  });
});
