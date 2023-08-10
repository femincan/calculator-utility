/* eslint-disable no-eval */
import { isEndsWithOperator, removeCharactersFromEnd } from '@src/utils';
import { CalculationResult, CalculationString } from '@src/types';
import { validateCalculationString } from './validateCalculationString';

const defaultOptions = {
  validation: true,
};

const getResult = (
  calculationString: CalculationString,
  options = defaultOptions,
): CalculationResult => {
  try {
    if (options.validation && !validateCalculationString(calculationString)) {
      throw new Error();
    }

    if (isEndsWithOperator(calculationString)) {
      return eval(removeCharactersFromEnd(calculationString));
    }

    return eval(calculationString);
  } catch {
    throw new Error('Calculation string is in an unsupported format');
  }
};

export { getResult };
