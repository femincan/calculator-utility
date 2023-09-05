import { Calculation } from '@src/types';

const isEndsWithDecimal = (calculationString: Calculation) => {
  const decimalRegex = /^.*(\D{1})?\d+\.\d+$/;

  return decimalRegex.test(calculationString);
};

export { isEndsWithDecimal };
