import { convertOperators } from '.';

describe('convertOperators (Function)', () => {
  test('It should replace the regular operators with special operators', () => {
    const calculationPair = ['43/7-65*27', '43÷7–65×27'];
    const newCalculationString = convertOperators(calculationPair[0]);

    expect(newCalculationString).toBe(calculationPair[1]);
  });
  test('It should replace the special operators with regular operators', () => {
    const calculationPair = ['27–237×87÷2', '27-237*87/2'];
    const newCalculationString = convertOperators(calculationPair[0], {
      toSpecial: false,
    });

    expect(newCalculationString).toBe(calculationPair[1]);
  });
});
