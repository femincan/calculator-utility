/* eslint-disable no-eval */
import { isEndsWithOperator, removeCharactersFromEnd } from '@src/utils';
import { CalculationResult, CalculationString } from '@src/types';

const getResult = (calculationString: CalculationString): CalculationResult => {
  if (isEndsWithOperator(calculationString)) {
    return eval(removeCharactersFromEnd(calculationString));
  }

  return eval(calculationString);
};

export { getResult };
