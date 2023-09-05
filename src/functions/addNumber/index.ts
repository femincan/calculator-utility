import { Calculation } from '@src/types';
import { removeCharactersFromEnd } from '@src/utils';
import { isEndsWithLeadingZero, isTextSingleNumber } from './utils';

const addNumber = (
  numberToAdd: string,
  calculation: Calculation,
): Calculation => {
  if (!isTextSingleNumber(numberToAdd)) {
    throw new Error(
      "The 'numberToAdd' parameter should be a single-character string that holds a valid numeric value",
    );
  }

  if (isEndsWithLeadingZero(calculation)) {
    if (numberToAdd === '0') {
      return calculation;
    }

    return `${removeCharactersFromEnd(calculation)}${numberToAdd}`;
  }

  return `${calculation}${numberToAdd}`;
};

export { addNumber };
