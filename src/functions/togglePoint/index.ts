import { CalculationString } from '@src/types';
import {
  isEndsWith,
  isEndsWithOperator,
  removeCharactersFromEnd,
} from '@src/utils';
import { isEndsWithDecimal, isEndsWithZeroAndPoint } from './point';

const togglePoint = (
  calculationString: CalculationString
): CalculationString => {
  if (isEndsWith(calculationString, '.')) {
    if (isEndsWithZeroAndPoint(calculationString)) {
      return removeCharactersFromEnd(calculationString, 2);
    }

    return removeCharactersFromEnd(calculationString);
  }

  if (calculationString.length === 0 || isEndsWithOperator(calculationString)) {
    return `${calculationString}0.`;
  }

  if (isEndsWithDecimal(calculationString)) {
    return calculationString;
  }

  return `${calculationString}.`;
};

export { togglePoint };
