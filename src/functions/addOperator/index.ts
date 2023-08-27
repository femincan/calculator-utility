import {
  isEndsWith,
  isEndsWithOperator,
  removeCharactersFromEnd,
} from '@src/utils';
import { CalculationString } from '@src/types';
import { toggleMinusOperator } from './utils';

const addOperator = (
  operator: '+' | '-' | '*' | '/',
  calculationString: CalculationString,
): CalculationString => {
  if (operator === '-') {
    return toggleMinusOperator(calculationString);
  }

  if (isEndsWithOperator(calculationString)) {
    if (isEndsWith(calculationString, '-')) {
      return `${removeCharactersFromEnd(calculationString, 2)}${operator}`;
    }

    if (isEndsWith(calculationString, operator)) {
      return calculationString;
    }

    return `${removeCharactersFromEnd(calculationString)}${operator}`;
  }

  if (calculationString.length === 0) {
    return calculationString;
  }

  return `${calculationString}${operator}`;
};

export { addOperator };
