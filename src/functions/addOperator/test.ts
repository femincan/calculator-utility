import { addOperator } from '.';

describe('addOperator (Function)', () => {
  describe('Empty calculation string', () => {
    test('It should add a minus operator if the given operator is a minus operator', () => {
      const newCalculation = addOperator('-', '');

      expect(newCalculation).toBe('-');
    });
    test('It should do nothing if the given operator is other than a minus operator', () => {
      const newCalculation = addOperator('*', '');

      expect(newCalculation).toBe('');
    });
  });

  describe('Single character calculation string', () => {
    test('It should remove the minus operator if both the first character and the given operator are minus operators', () => {
      const newCalculation = addOperator('-', '-');

      expect(newCalculation).toBe('');
    });
    test('It should add the given operator if the first character is not a minus operator', () => {
      const newCalculation = addOperator('/', '2');

      expect(newCalculation).toBe('2/');
    });
  });

  describe('Multiple character calculation string', () => {
    test('It should add a minus operator if the last character is an operator other than minus operator', () => {
      const newCalculation = addOperator('-', '245/23+');

      expect(newCalculation).toBe('245/23+-');
    });
    test('It should remove the minus operator if the given operator is a minus operator and the calculation string ends with a minus operator', () => {
      const newCalculation = addOperator('-', '24*-');

      expect(newCalculation).toBe('24*');
    });
    test('It should remove the both operators and add the given operator if the given operator is other than minus operator and the calculation string ends with an operator and a minus operator', () => {
      const newCalculation = addOperator('*', '223/-');

      expect(newCalculation).toBe('223*');
    });
    test('It should return the same calculation string if the last character is the same operator as the given operator', () => {
      const calculation1 = '1+';
      const calculation2 = '1*';

      const newCalculation1 = addOperator('+', calculation1);
      const newCalculation2 = addOperator('*', calculation2);

      expect(newCalculation1).toBe(calculation1);
      expect(newCalculation2).toBe(calculation2);
    });
    test('It should replace the operator with the given operator if the last character is operator', () => {
      const newCalculation = addOperator('*', '92/');

      expect(newCalculation).toBe('92*');
    });
    test('It should add the given operator if the last character is a number', () => {
      const newCalculation = addOperator('/', '239+543');

      expect(newCalculation).toBe('239+543/');
    });
  });
});
