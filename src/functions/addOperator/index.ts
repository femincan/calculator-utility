import { isEndsWithOperator } from '@src/utils';
import { CalculationString } from '@src/types';
import { isEndsWithMinusOperator, switchMinusOperator } from './minus';

const addOperator = (
  operator: '+' | '-' | '*' | '/',
  calculationString: CalculationString
): CalculationString => {
  if (operator === '-') {
    return switchMinusOperator(calculationString);
  }

  if (isEndsWithOperator(calculationString)) {
    if (isEndsWithMinusOperator(calculationString)) {
      return `${calculationString.slice(
        0,
        calculationString.length - 2
      )}${operator}`;
    }

    return `${calculationString.slice(
      0,
      calculationString.length - 1
    )}${operator}`;
  }

  if (calculationString.length === 0) {
    return calculationString;
  }

  return `${calculationString}${operator}`;
};

export { addOperator };
