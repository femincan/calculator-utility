import { Calculation } from '@src/types';
import { isEndsWith, removeCharactersFromEnd } from '@src/utils';

const toggleMinusOperator = (calculation: Calculation): Calculation => {
  if (isEndsWith(calculation, '-')) {
    return removeCharactersFromEnd(calculation);
  }

  return `${calculation}-`;
};

export { toggleMinusOperator };
