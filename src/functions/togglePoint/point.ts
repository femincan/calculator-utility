import { CalculationString } from '@src/types';

const isEndsWithZeroAndPoint = (calculationString: CalculationString) => {
  const zeroAndPointRegex = /^.*0\.$/;

  return zeroAndPointRegex.test(calculationString);
};

const isEndsWithDecimal = (calculationString: CalculationString) => {
  const decimalRegex = /^.*\d+\.\d+$/;

  return decimalRegex.test(calculationString);
};

export { isEndsWithZeroAndPoint, isEndsWithDecimal };
