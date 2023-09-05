import { Calculation } from '@src/types';

const isEndsWithLeadingZero = (calculationString: Calculation): boolean => {
  const leadingZeroRegex = /^(.*[^.\d])?0$/;

  return leadingZeroRegex.test(calculationString);
};

const isTextSingleNumber = (text: string): boolean => {
  const singleNumberRegex = /^\d{1}$/;

  return singleNumberRegex.test(text);
};

export { isEndsWithLeadingZero, isTextSingleNumber };
