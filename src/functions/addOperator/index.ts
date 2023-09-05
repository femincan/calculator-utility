import {
  isEndsWith,
  isEndsWithOperator,
  removeCharactersFromEnd,
} from '@src/utils';
import { Calculation } from '@src/types';
import { toggleMinusOperator } from './utils';

const addOperator = (
  operator: '+' | '-' | '*' | '/',
  calculation: Calculation,
): Calculation => {
  if (operator === '-') {
    return toggleMinusOperator(calculation);
  }

  if (isEndsWithOperator(calculation)) {
    if (isEndsWith(calculation, '-')) {
      return `${removeCharactersFromEnd(calculation, 2)}${operator}`;
    }

    if (isEndsWith(calculation, operator)) {
      return calculation;
    }

    return `${removeCharactersFromEnd(calculation)}${operator}`;
  }

  if (calculation.length === 0) {
    return calculation;
  }

  return `${calculation}${operator}`;
};

export { addOperator };
