import { CalculationString } from '@src/types';

const removeCharactersFromEnd = (
  calculationString: CalculationString,
  count: number = 1
): CalculationString => {
  if (count > calculationString.length) {
    return '';
  }

  return calculationString.slice(0, calculationString.length - count);
};

export { removeCharactersFromEnd };
