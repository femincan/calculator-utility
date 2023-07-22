import { CalculationString } from '@src/types';
import { isEndsWithOperator } from '@src/utils';
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
      return calculationString.slice(0, calculationString.length - 2);
    }

    return calculationString.slice(0, calculationString.length - 1);
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
