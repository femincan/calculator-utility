import { CalculationString } from '@src/types';
import { removeCharactersFromEnd } from '@src/utils';
import { isEndsWithZero } from './zero';

const addNumber = (
  numberToAdd: number,
  calculationString: CalculationString
): CalculationString => {
  if (isEndsWithZero(calculationString)) {
    if (numberToAdd === 0) {
      return calculationString;
    }

    return `${removeCharactersFromEnd(calculationString)}${numberToAdd}`;
  }

  return `${calculationString}${numberToAdd}`;
};

export { addNumber };
