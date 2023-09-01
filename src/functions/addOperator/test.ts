import { addOperator } from '.';

describe('addOperator (Function)', () => {
  describe('Empty calculation string', () => {
    test('It should add a minus operator if the given operator is a minus operator', () => {
      const newCalculationString = addOperator('-', '');

      expect(newCalculationString).toBe('-');
    });
    test('It should do nothing if the given operator is other than a minus operator', () => {
      const newCalculationString = addOperator('*', '');

      expect(newCalculationString).toBe('');
    });
  });

  describe('Single character calculation string', () => {
    test('It should remove the minus operator if both the first character and the given operator are minus operators', () => {
      const newCalculationString = addOperator('-', '-');

      expect(newCalculationString).toBe('');
    });
    test('It should add the given operator if the first character is not a minus operator', () => {
      const newCalculationString = addOperator('/', '2');

      expect(newCalculationString).toBe('2/');
    });
  });

  describe('Multiple character calculation string', () => {
    test('It should add a minus operator if the last character is an operator other than minus operator', () => {
      const newCalculationString = addOperator('-', '245/23+');

      expect(newCalculationString).toBe('245/23+-');
    });
    test('It should remove the minus operator if the given operator is a minus operator and the calculation string ends with a minus operator', () => {
      const newCalculationString = addOperator('-', '24*-');

      expect(newCalculationString).toBe('24*');
    });
    test('It should remove the both operators and add the given operator if the given operator is other than minus operator and the calculation string ends with an operator and a minus operator', () => {
      const newCalculationString = addOperator('*', '223/-');

      expect(newCalculationString).toBe('223*');
    });
    test('It should return the same calculation string if the last character is the same operator as the given operator', () => {
      const calculationString1 = '1+';
      const calculationString2 = '1*';

      const newCalculationString1 = addOperator('+', calculationString1);
      const newCalculationString2 = addOperator('*', calculationString2);

      expect(newCalculationString1).toBe(calculationString1);
      expect(newCalculationString2).toBe(calculationString2);
    });
    test('It should replace the operator with the given operator if the last character is operator', () => {
      const newCalculationString = addOperator('*', '92/');

      expect(newCalculationString).toBe('92*');
    });
    test('It should add the given operator if the last character is a number', () => {
      const newCalculationString = addOperator('/', '239+543');

      expect(newCalculationString).toBe('239+543/');
    });
  });
});
