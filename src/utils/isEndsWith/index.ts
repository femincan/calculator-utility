import { CalculationString } from '@src/types';

const isEndsWith = (calculationString: CalculationString, check: string) => {
  if (check.length !== 1) {
    throw new Error('The length of check string must be one');
  }

  return calculationString.at(-1) === check;
};

export { isEndsWith };
