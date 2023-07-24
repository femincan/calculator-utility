import { CalculationString } from '@src/types';
import { isEndsWith, removeCharactersFromEnd } from '@src/utils';

const toggleMinusOperator = (
  calculationString: CalculationString
): CalculationString => {
  if (isEndsWith(calculationString, '-')) {
    return removeCharactersFromEnd(calculationString);
  }

  return `${calculationString}-`;
};

export { toggleMinusOperator };
