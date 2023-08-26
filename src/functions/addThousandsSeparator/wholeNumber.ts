import { CalculationString } from '@src/types';
import { removeCharactersFromEnd } from '@src/utils';

const wholeNumberRegex = /^(.*\D{1})?(?<!\d+\.\d*)(\d+)$/;

const isEndsWithWholeNumber = (calculationString: CalculationString): boolean =>
  wholeNumberRegex.test(calculationString);

const addSeparator = (wholeNumber: string): string => {
  const reverseString = (string: string) =>
    string.split('').toReversed().join('');

  const reversedWholeNumber = reverseString(wholeNumber);

  const withSeparator = reversedWholeNumber.replaceAll(/(\d{3})/g, '$&,');

  if (withSeparator.at(-1) === ',') {
    return reverseString(removeCharactersFromEnd(withSeparator));
  }

  return reverseString(withSeparator);
};

export { wholeNumberRegex, isEndsWithWholeNumber, addSeparator };
