import { Calculation } from '@src/types';
import { removeCharactersFromEnd } from '@src/utils';

const clearOne = (calculation: Calculation) =>
  removeCharactersFromEnd(calculation);

export { clearOne };
