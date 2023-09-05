import { Calculation } from '@src/types';

const validateCalculationString = (calculationString: Calculation): boolean => {
  const validationRegex = /^[0-9.+\-*/]+$/;

  return validationRegex.test(calculationString);
};

export { validateCalculationString };
