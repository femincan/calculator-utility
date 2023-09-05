import { Calculation } from '@src/types';

const validateCalculationString = (calculation: Calculation): boolean => {
  const validationRegex = /^[0-9.+\-*/]+$/;

  return validationRegex.test(calculation);
};

export { validateCalculationString };
