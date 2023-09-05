import { Calculation } from '@src/types';

const isEndsWithOperator = (calculation: Calculation) => {
  const operators = ['+', '-', '*', '/'];

  const lastCharacter = calculation.at(-1);

  return lastCharacter ? operators.includes(lastCharacter) : false;
};

export { isEndsWithOperator };
