import { Calculation } from '@src/types';

const isEndsWithDecimal = (calculation: Calculation) => {
  const decimalRegex = /^.*(\D{1})?\d+\.\d+$/;

  return decimalRegex.test(calculation);
};

export { isEndsWithDecimal };
