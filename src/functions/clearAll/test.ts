import { clearAll } from '.';

describe('clearAll (Function)', () => {
  test('It should return an empty string', () => {
    const newCalculationString = clearAll();

    expect(newCalculationString).toBe('');
  });
});
