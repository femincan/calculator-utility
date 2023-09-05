import {
  isEndsWith,
  isEndsWithOperator,
  removeCharactersFromEnd,
} from '@src/utils';
import { Calculation } from '@src/types';
import { toggleMinusOperator } from './utils';

const addOperator = (
  operatorToAdd: '+' | '-' | '*' | '/',
  calculation: Calculation,
): Calculation => {
  if (operatorToAdd === '-') {
    return toggleMinusOperator(calculation);
  }

  if (isEndsWithOperator(calculation)) {
    if (isEndsWith(calculation, '-')) {
      return `${removeCharactersFromEnd(calculation, 2)}${operatorToAdd}`;
    }

    if (isEndsWith(calculation, operatorToAdd)) {
      return calculation;
    }

    return `${removeCharactersFromEnd(calculation)}${operatorToAdd}`;
  }

  if (calculation.length === 0) {
    return calculation;
  }

  return `${calculation}${operatorToAdd}`;
};

export { addOperator };
