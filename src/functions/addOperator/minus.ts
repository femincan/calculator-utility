import { CalculationString } from '@src/types';
import { removeCharactersFromEnd } from '@src/utils';

const isEndsWithMinusOperator = (calculationString: CalculationString) =>
  calculationString.at(-1) === '-';

const switchMinusOperator = (
  calculationString: CalculationString
): CalculationString => {
  if (isEndsWithMinusOperator(calculationString)) {
    return removeCharactersFromEnd(calculationString);
  }

  return `${calculationString}-`;
};

export { isEndsWithMinusOperator, switchMinusOperator };
