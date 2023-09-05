import { Calculation } from '@src/types';
import { getKeyByValue } from '@src/utils';

const operatorMap: Record<string, string> = {
  '/': '÷',
  '*': '×',
  '-': '–',
};

type Options = {
  toSpecial: boolean;
};

const convertOperators = (
  calculation: Calculation,
  options: Options = { toSpecial: true },
): Calculation => {
  const { toSpecial } = options;

  const operatorRegex = new RegExp(
    `\\${(toSpecial
      ? Object.keys(operatorMap)
      : Object.values(operatorMap)
    ).join('|\\')}`,
    'g',
  );

  return calculation.replaceAll(operatorRegex, (match) =>
    toSpecial
      ? operatorMap[match]
      : (getKeyByValue(operatorMap, match) as string),
  );
};

export { convertOperators };
