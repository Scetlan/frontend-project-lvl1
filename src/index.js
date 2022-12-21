#!/usr/bin/env node
import readlineSync from 'readline-sync';
import startGame from './cli.js';

export const getRandomInt = (max) => Math.floor(Math.random() * max);

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

export default () => {
  const name = startGame();

  console.log('What is the result of the expression?');

  const maxNum = 50;

  for (let i = 0; i < 3; i += 1) {
    const num1 = getRandomInt(maxNum);
    const num2 = getRandomInt(maxNum);
    const sign = randsignOperators();

    console.log(`Question: ${num1} ${sign} ${num2}`);
    const quest = readlineSync.question('Your answer: ');

    const myans = calcExpression(num1, num2, sign);

    if (Number(quest) === Number(myans)) {
      console.log(i === 2 ? `Congratulations, ${name}!` : 'Correct!');
    } else {
      console.log(`${quest}${' is wrong answer ;(. Correct answer was '}${myans}`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
};
