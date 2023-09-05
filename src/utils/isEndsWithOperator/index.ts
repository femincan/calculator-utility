import { CalculationString } from '@src/types';

const isEndsWithOperator = (calculationString: CalculationString) => {
  const operators = ['+', '-', '*', '/'];

  const lastCharacter = calculationString.at(-1);

  return lastCharacter ? operators.includes(lastCharacter) : false;
};

export { isEndsWithOperator };
