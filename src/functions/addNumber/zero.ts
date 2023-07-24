import { CalculationString } from '@src/types';

const isEndsWithZero = (calculationString: CalculationString): boolean => {
  const zeroRegex = /^(.*[^.\d])?0$/;

  return zeroRegex.test(calculationString);
};

export { isEndsWithZero };
