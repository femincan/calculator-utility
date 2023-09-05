import { addThousandsSeparator } from '.';

describe('addThousandsSeparator (Function)', () => {
  test('It should return the calculation string as is if the last character is an math operator', () => {
    const calculation = '23/2*';
    const newCalculation = addThousandsSeparator(calculation);

    expect(newCalculation).toBe(calculation);
  });
  test('It should return the calculation string as is if the last part of the calculation string is a decimal number', () => {
    const calculation = '8+3.3';
    const newCalculation = addThousandsSeparator(calculation);

    expect(newCalculation).toBe(calculation);
  });
  test('It should return the calculation string as is if the last part of the calculation string is less than a thousand', () => {
    const calculation = '23+234';
    const newCalculation = addThousandsSeparator(calculation);

    expect(newCalculation).toBe(calculation);
  });
  test('It should add thousands separators if the last part of the calculation string is a whole number', () => {
    const calculations: {
      calculation: string;
      calculationWithSeparator: string;
    }[] = [
      {
        calculation: '79+27/99*233427976',
        calculationWithSeparator: '79+27/99*233,427,976',
      },
      {
        calculation: '1962',
        calculationWithSeparator: '1,962',
      },
      {
        calculation: '2723792',
        calculationWithSeparator: '2,723,792',
      },
      {
        calculation: '22481',
        calculationWithSeparator: '22,481',
      },
    ];

    const newCalculation0 = addThousandsSeparator(calculations[0].calculation);
    const newCalculation1 = addThousandsSeparator(calculations[1].calculation);
    const newCalculation2 = addThousandsSeparator(calculations[2].calculation);
    const newCalculation3 = addThousandsSeparator(calculations[3].calculation);

    expect(newCalculation0).toBe(calculations[0].calculationWithSeparator);
    expect(newCalculation1).toBe(calculations[1].calculationWithSeparator);
    expect(newCalculation2).toBe(calculations[2].calculationWithSeparator);
    expect(newCalculation3).toBe(calculations[3].calculationWithSeparator);
  });
});
