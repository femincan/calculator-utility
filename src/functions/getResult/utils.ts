import { CalculationString } from '@src/types';

const validateCalculationString = (
  calculationString: CalculationString,
): boolean => {
  const validationRegex = /^[0-9.+\-*/]+$/;

  return validationRegex.test(calculationString);
};

export { validateCalculationString };
