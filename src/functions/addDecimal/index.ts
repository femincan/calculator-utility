import { Calculation } from '@src/types';
import { isEndsWith, isEndsWithOperator } from '@src/utils';
import { isEndsWithDecimal } from './utils';

const addDecimal = (calculation: Calculation): Calculation => {
  if (isEndsWith(calculation, '.') || isEndsWithDecimal(calculation)) {
    return calculation;
  }

  if (calculation.length === 0 || isEndsWithOperator(calculation)) {
    return `${calculation}0.`;
  }

  return `${calculation}.`;
};

export { addDecimal };
