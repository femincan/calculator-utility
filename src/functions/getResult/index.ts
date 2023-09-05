/* eslint-disable no-eval */
import { Calculation } from '@src/types';
import { isEndsWithOperator, removeCharactersFromEnd } from '@src/utils';
import { validateCalculationString } from './utils';

const getResult = (calculation: Calculation): string => {
  try {
    if (!validateCalculationString(calculation)) {
      throw new Error();
    }

    return `${eval?.(
      isEndsWithOperator(calculation)
        ? removeCharactersFromEnd(calculation)
        : calculation,
    )}`;
  } catch {
    throw new Error('Calculation string is in an unsupported format');
  }
};

export { getResult };
