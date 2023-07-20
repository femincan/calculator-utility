/* eslint-disable no-eval */
import { isEndsWithOperator } from '@src/utils';
import { CalculationResult, CalculationString } from '@src/types';

const getResult = (calculationString: CalculationString): CalculationResult => {
  if (isEndsWithOperator(calculationString)) {
    return eval(calculationString.slice(0, calculationString.length - 1));
  }

  return eval(calculationString);
};

export { getResult };
