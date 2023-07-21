import { CalculationString } from '@src/types';

const isEndsWithMinusOperator = (calculationString: CalculationString) =>
  calculationString.at(-1) === '-';

const switchMinusOperator = (
  calculationString: CalculationString
): CalculationString => {
  if (isEndsWithMinusOperator(calculationString)) {
    return calculationString.slice(0, calculationString.length - 1);
  }

  return `${calculationString}-`;
};

export { isEndsWithMinusOperator, switchMinusOperator };
