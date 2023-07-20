import { CalculationString } from '@src/types';

const addNumber = (
  numberToAdd: number,
  calculationString: CalculationString
): CalculationString => `${calculationString}${numberToAdd}`;

export { addNumber };
