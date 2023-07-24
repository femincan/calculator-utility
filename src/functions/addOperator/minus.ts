import { CalculationString } from '@src/types';
import { isEndsWith, removeCharactersFromEnd } from '@src/utils';

const switchMinusOperator = (
  calculationString: CalculationString
): CalculationString => {
  if (isEndsWith(calculationString, '-')) {
    return removeCharactersFromEnd(calculationString);
  }

  return `${calculationString}-`;
};

export { switchMinusOperator };
