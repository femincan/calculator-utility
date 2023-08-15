/* eslint-disable no-eval */
import { CalculationResult, CalculationString } from '@src/types';
import { isEndsWithOperator, removeCharactersFromEnd } from '@src/utils';
import { validateCalculationString } from './validateCalculationString';

const getResult = (calculationString: CalculationString): CalculationResult => {
  try {
    if (!validateCalculationString(calculationString)) {
      throw new Error();
    }

    return eval?.(
      isEndsWithOperator(calculationString)
        ? removeCharactersFromEnd(calculationString)
        : calculationString,
    );
  } catch {
    throw new Error('Calculation string is in an unsupported format');
  }
};

export { getResult };
