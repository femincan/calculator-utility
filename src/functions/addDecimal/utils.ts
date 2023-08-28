import { CalculationString } from '@src/types';

const isEndsWithDecimal = (calculationString: CalculationString) => {
  const decimalRegex = /^.*(\D{1})?\d+\.\d+$/;

  return decimalRegex.test(calculationString);
};

export { isEndsWithDecimal };
