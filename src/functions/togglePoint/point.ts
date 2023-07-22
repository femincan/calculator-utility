import { CalculationString } from '@src/types';

const isEndsWithPoint = (calculationString: CalculationString) =>
  calculationString.at(-1) === '.';

const isEndsWithZeroAndPoint = (calculationString: CalculationString) => {
  const zeroAndPointRegex = /^.*0\.$/;

  return zeroAndPointRegex.test(calculationString);
};

const isEndsWithDecimal = (calculationString: CalculationString) => {
  const decimalRegex = /^.*\d+\.\d+$/;

  return decimalRegex.test(calculationString);
};

export { isEndsWithPoint, isEndsWithZeroAndPoint, isEndsWithDecimal };
