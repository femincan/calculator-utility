import { CalculationString } from '@src/types';

const wholeNumberRegex = /^(.*\D{1})?(?<!\d+\.\d*)(\d+)$/;

const isEndsWithWholeNumber = (calculationString: CalculationString): boolean =>
  wholeNumberRegex.test(calculationString);

const addSeparator = (wholeNumber: string): string => {
  const wholeNumberArray = wholeNumber.split('');

  for (let i = wholeNumberArray.length - 3; i > 0; i -= 3) {
    wholeNumberArray.splice(i, 0, ',');
  }

  return wholeNumberArray.join('');
};

export { wholeNumberRegex, isEndsWithWholeNumber, addSeparator };
