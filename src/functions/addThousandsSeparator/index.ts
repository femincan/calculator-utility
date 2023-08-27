import { CalculationString } from '@src/types';
import {
  addSeparator,
  isEndsWithWholeNumber,
  wholeNumberRegex,
} from './wholeNumber';

const addThousandsSeparator = (
  calculationString: CalculationString,
): CalculationString => {
  if (!isEndsWithWholeNumber(calculationString)) {
    return calculationString;
  }

  return calculationString.replace(
    wholeNumberRegex,
    (match, firstPart, wholeNumber) => {
      if (wholeNumber.length < 4) return match;

      return `${firstPart ?? ''}${addSeparator(wholeNumber)}`;
    },
  );
};

export { addThousandsSeparator };
