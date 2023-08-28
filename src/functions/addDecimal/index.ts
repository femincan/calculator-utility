import { CalculationString } from '@src/types';
import { isEndsWith, isEndsWithOperator } from '@src/utils';
import { isEndsWithDecimal } from './utils';

const addDecimal = (
  calculationString: CalculationString,
): CalculationString => {
  if (
    isEndsWith(calculationString, '.') ||
    isEndsWithDecimal(calculationString)
  ) {
    return calculationString;
  }

  if (calculationString.length === 0 || isEndsWithOperator(calculationString)) {
    return `${calculationString}0.`;
  }

  return `${calculationString}.`;
};

export { addDecimal };
