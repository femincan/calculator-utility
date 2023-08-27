/* eslint-disable no-eval */
import { CalculationString } from '@src/types';
import { isEndsWithOperator, removeCharactersFromEnd } from '@src/utils';
import { validateCalculationString } from './utils';

const getResult = (calculationString: CalculationString): string => {
  try {
    if (!validateCalculationString(calculationString)) {
      throw new Error();
    }

    return `${eval?.(
      isEndsWithOperator(calculationString)
        ? removeCharactersFromEnd(calculationString)
        : calculationString,
    )}`;
  } catch {
    throw new Error('Calculation string is in an unsupported format');
  }
};

export { getResult };
