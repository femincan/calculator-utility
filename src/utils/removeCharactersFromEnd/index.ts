import { Calculation } from '@src/types';

const removeCharactersFromEnd = (
  calculation: Calculation,
  count: number = 1,
): Calculation => {
  if (count > calculation.length) {
    return '';
  }

  return calculation.slice(0, calculation.length - count);
};

export { removeCharactersFromEnd };
