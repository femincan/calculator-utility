import { Calculation } from '@src/types';

const validateCalculation = (calculation: Calculation): boolean => {
  const validationRegex = /^([0-9.+\-*/e]|Infinity)+$/;

  return validationRegex.test(calculation);
};

export { validateCalculation };
