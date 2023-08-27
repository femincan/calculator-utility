import { addThousandsSeparator } from '.';

describe('addThousandsSeparator (Function)', () => {
  test('It should return the calculation string as is if the last character is an math operator', () => {
    const calculationString = '23/2*';
    const newCalculationString = addThousandsSeparator(calculationString);

    expect(newCalculationString).toBe(calculationString);
  });
  test('It should return the calculation string as is if the last part of the calculation string is a decimal number', () => {
    const calculationString = '8+3.3';
    const newCalculationString = addThousandsSeparator(calculationString);

    expect(newCalculationString).toBe(calculationString);
  });
  test('It should return the calculation string as is if the last part of the calculation string is less than a thousand', () => {
    const calculationString = '23+234';
    const newCalculationString = addThousandsSeparator(calculationString);

    expect(newCalculationString).toBe(calculationString);
  });
  test('It should add thousands separators if the last part of the calculation string is a whole number', () => {
    const calculations: {
      calculationString: string;
      calculationStringWithSeparator: string;
    }[] = [
      {
        calculationString: '79+27/99*233427976',
        calculationStringWithSeparator: '79+27/99*233,427,976',
      },
      {
        calculationString: '1962',
        calculationStringWithSeparator: '1,962',
      },
      {
        calculationString: '2723792',
        calculationStringWithSeparator: '2,723,792',
      },
      {
        calculationString: '22481',
        calculationStringWithSeparator: '22,481',
      },
    ];

    const newCalculationString0 = addThousandsSeparator(
      calculations[0].calculationString,
    );
    const newCalculationString1 = addThousandsSeparator(
      calculations[1].calculationString,
    );
    const newCalculationString2 = addThousandsSeparator(
      calculations[2].calculationString,
    );
    const newCalculationString3 = addThousandsSeparator(
      calculations[3].calculationString,
    );

    expect(newCalculationString0).toBe(
      calculations[0].calculationStringWithSeparator,
    );
    expect(newCalculationString1).toBe(
      calculations[1].calculationStringWithSeparator,
    );
    expect(newCalculationString2).toBe(
      calculations[2].calculationStringWithSeparator,
    );
    expect(newCalculationString3).toBe(
      calculations[3].calculationStringWithSeparator,
    );
  });
});
