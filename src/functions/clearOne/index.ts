import { Calculation } from '@src/types';
import { removeCharactersFromEnd } from '@src/utils';

const clearOne = (calculation: Calculation) => {
  const infinityStr = 'Infinity';
  const isEndsWithInf = calculation.endsWith(infinityStr);

  if (isEndsWithInf) {
    return removeCharactersFromEnd(calculation, infinityStr.length);
  }

  const sciNotationRegex = /^(.*)e\+\d+$/;
  const isEndsWithSciNotation = sciNotationRegex.test(calculation);

  if (isEndsWithSciNotation) {
    return calculation.replace(sciNotationRegex, '$1');
  }

  return removeCharactersFromEnd(calculation);
};

export { clearOne };
