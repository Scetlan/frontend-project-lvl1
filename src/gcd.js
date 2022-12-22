import greetings from './cli.js';
import { getRandomInt, startGame } from './index.js';

const name = greetings();

const largestDivisor = (num1, num2) => {
  let x = num1;
  let y = num2;
  while (x !== y) {
    if (x > y) {
      x -= y;
    } else {
      y -= x;
    }
  }
  return x;
};

const gcdGames = () => {
  console.log('Find the greatest common divisor of given numbers.');

  const num1 = getRandomInt(100);
  const num2 = getRandomInt(100);

  const question = `${num1} ${num2}`;
  const correctAnswer = largestDivisor(num1, num2);

  return { name, question, correctAnswer };
};

export default () => startGame(gcdGames);
