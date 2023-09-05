import { Calculation } from '@src/types';

const removeCharactersFromEnd = (
  calculationString: Calculation,
  count: number = 1,
): Calculation => {
  if (count > calculationString.length) {
    return '';
  }

  return calculationString.slice(0, calculationString.length - count);
};

export { removeCharactersFromEnd };
