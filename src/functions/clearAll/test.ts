import { clearAll } from '.';

describe('clearAll (Function)', () => {
  test('It should return an empty string', () => {
    const newCalculation = clearAll();

    expect(newCalculation).toBe('');
  });
});
