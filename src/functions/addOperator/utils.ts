import { Calculation } from '@src/types';
import { isEndsWith, removeCharactersFromEnd } from '@src/utils';

const toggleMinusOperator = (calculationString: Calculation): Calculation => {
  if (isEndsWith(calculationString, '-')) {
    return removeCharactersFromEnd(calculationString);
  }

  return `${calculationString}-`;
};

export { toggleMinusOperator };
