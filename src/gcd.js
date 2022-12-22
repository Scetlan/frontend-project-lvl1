import greetings from './cli.js';
import { getRandomInt, startGame } from './index.js';

const name = greetings();

const largestDivisor = (num1, num2) => {
  let x = num1;
  let y = num2;
  if (x === y) {
    return 1;
  }

  while (x !== 0 && y !== 0) {
    if (x > y) {
      x %= y;
    } else {
      y %= x;
    }
  }
  return Math.floor(x + y);
};

const gcdGames = () => {
  console.log('Find the greatest common divisor of given numbers.');

  const randomNum1 = getRandomInt(100);
  const randomNum2 = getRandomInt(100);

  const question = `${randomNum1} ${randomNum2}`;
  const correctAnswer = largestDivisor(randomNum1, randomNum2);

  return { name, question, correctAnswer };
};

export default () => startGame(gcdGames);
