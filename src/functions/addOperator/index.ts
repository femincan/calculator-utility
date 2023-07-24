import {
  isEndsWith,
  isEndsWithOperator,
  removeCharactersFromEnd,
} from '@src/utils';
import { CalculationString } from '@src/types';
import { switchMinusOperator } from './minus';

const addOperator = (
  operator: '+' | '-' | '*' | '/',
  calculationString: CalculationString
): CalculationString => {
  if (operator === '-') {
    return switchMinusOperator(calculationString);
  }

  if (isEndsWithOperator(calculationString)) {
    if (isEndsWith(calculationString, '-')) {
      return `${removeCharactersFromEnd(calculationString, 2)}${operator}`;
    }

    return `${removeCharactersFromEnd(calculationString)}${operator}`;
  }

  if (calculationString.length === 0) {
    return calculationString;
  }

  return `${calculationString}${operator}`;
};

export { addOperator };
