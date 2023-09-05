import { Calculation } from '@src/types';
import { removeCharactersFromEnd } from '@src/utils';
import { isEndsWithLeadingZero, isTextSingleNumber } from './utils';

const addNumber = (
  numberToAdd: string,
  calculationString: Calculation,
): Calculation => {
  if (!isTextSingleNumber(numberToAdd)) {
    throw new Error(
      "The 'numberToAdd' parameter should be a single-character string that holds a valid numeric value",
    );
  }

  if (isEndsWithLeadingZero(calculationString)) {
    if (numberToAdd === '0') {
      return calculationString;
    }

    return `${removeCharactersFromEnd(calculationString)}${numberToAdd}`;
  }

  return `${calculationString}${numberToAdd}`;
};

export { addNumber };
