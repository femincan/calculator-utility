import { removeCharactersFromEnd } from '.';

describe('removeCharactersFromEnd (Utility Function)', () => {
  test('It should remove only the last character by default if the count parameter is not specified', () => {
    const newCalculation = removeCharactersFromEnd('2+51');

    expect(newCalculation).toBe('2+5');
  });
  test('It should remove given number of characters from at the end of the calculation string', () => {
    const newCalculation = removeCharactersFromEnd('234+221/3.7', 3);

    expect(newCalculation).toBe('234+221/');
  });
  test('It should remove the whole string if the given number is bigger than the length of calculation string', () => {
    const newCalculation = removeCharactersFromEnd('273*33+1', 10);

    expect(newCalculation).toBe('');
  });
  test('It should remove nothing if the given number is zero', () => {
    const calculation = '234/3';

    const newCalculation = removeCharactersFromEnd(calculation, 0);

    expect(newCalculation).toBe(calculation);
  });
});
