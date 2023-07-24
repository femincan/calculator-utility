import { CalculationString } from '@src/types';
import { isEndsWithOperator, removeCharactersFromEnd } from '@src/utils';
import {
  isEndsWithDecimal,
  isEndsWithPoint,
  isEndsWithZeroAndPoint,
} from './point';

const togglePoint = (
  calculationString: CalculationString
): CalculationString => {
  if (isEndsWithPoint(calculationString)) {
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
