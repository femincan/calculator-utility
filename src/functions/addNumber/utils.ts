import { CalculationString } from '@src/types';

const isEndsWithLeadingZero = (
  calculationString: CalculationString,
): boolean => {
  const zeroRegex = /^(.*[^.\d])?0$/;

  return zeroRegex.test(calculationString);
};

const isTextSingleNumber = (text: string): boolean => {
  const singleNumberRegex = /^[0-9]{1}$/;

  return singleNumberRegex.test(text);
};

export { isEndsWithLeadingZero, isTextSingleNumber };
