import { Calculation } from '@src/types';

const isEndsWithOperator = (calculationString: Calculation) => {
  const operators = ['+', '-', '*', '/'];

  const lastCharacter = calculationString.at(-1);

  return lastCharacter ? operators.includes(lastCharacter) : false;
};

export { isEndsWithOperator };
