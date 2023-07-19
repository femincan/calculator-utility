import { operators } from '@src/constants';
import { CalculationString } from '@src/types';

const isEndsWithOperator = (calculationString: CalculationString) =>
  operators.includes(calculationString.at(-1));

export { isEndsWithOperator };
