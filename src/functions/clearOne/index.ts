import { CalculationString } from '@src/types';
import { removeCharactersFromEnd } from '@src/utils';

const clearOne = (calculationString: CalculationString) =>
  removeCharactersFromEnd(calculationString);

export { clearOne };
