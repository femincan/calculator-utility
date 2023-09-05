import { Calculation } from '@src/types';
import { addSeparator, isEndsWithWholeNumber, wholeNumberRegex } from './utils';

const addThousandsSeparator = (calculation: Calculation): Calculation => {
  if (!isEndsWithWholeNumber(calculation)) {
    return calculation;
  }

  return calculation.replace(
    wholeNumberRegex,
    (match, firstPart, wholeNumber) => {
      if (wholeNumber.length < 4) return match;

      return `${firstPart ?? ''}${addSeparator(wholeNumber)}`;
    },
  );
};

export { addThousandsSeparator };
