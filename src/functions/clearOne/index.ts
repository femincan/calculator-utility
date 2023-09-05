import { Calculation } from '@src/types';
import { removeCharactersFromEnd } from '@src/utils';

const clearOne = (calculationString: Calculation) =>
  removeCharactersFromEnd(calculationString);

export { clearOne };
