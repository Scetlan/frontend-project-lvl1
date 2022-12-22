import greetings from './cli.js';
import { startGame, getRandomInt } from './index.js';

const randsignOperators = () => {
  const operators = ['-', '+', '*'];
  const random = getRandomInt(operators.length);
  const randsign = operators[random];
  return randsign;
};

const calcExpression = (num1, num2, sign) => {
  if (sign === '*') {
    return num1 * num2;
  } if (sign === '+') {
    return num1 + num2;
  } if (sign === '-') {
    return num1 - num2;
  }
  return 'error';
};
const name = greetings();

const calcGame = () => {
  console.log('What is the result of the expression?');

  const maxNum = 50;

  const num1 = getRandomInt(maxNum);
  const num2 = getRandomInt(maxNum);
  const sign = randsignOperators();
  const question = `${num1} ${sign} ${num2}`;

  const correctAnswer = calcExpression(num1, num2, sign);

  return { name, question, correctAnswer };
};

export default () => startGame(calcGame);
