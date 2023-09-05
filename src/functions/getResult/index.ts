/* eslint-disable no-eval */
import { Calculation } from '@src/types';
import { isEndsWithOperator, removeCharactersFromEnd } from '@src/utils';
import { validateCalculation } from './utils';

const getResult = (calculation: Calculation): string => {
  try {
    if (!validateCalculation(calculation)) {
      throw new Error();
    }

    let cleanedCalculation: Calculation | undefined;

    if (isEndsWithOperator(calculation)) {
      cleanedCalculation = removeCharactersFromEnd(calculation);

      if (isEndsWithOperator(cleanedCalculation)) {
        cleanedCalculation = removeCharactersFromEnd(cleanedCalculation);
      }
    }

    return `${eval?.(cleanedCalculation ?? calculation)}`;
  } catch {
    throw new Error('Calculation string is in an unsupported format');
  }
};

export { getResult };
