import greetings from './cli.js';
import { getRandomInt, startGame } from './index.js';

const name = greetings();
console.log('Find the greatest common divisor of given numbers.');

const geometrciSequence = (max = 10) => {
  const arr = [];
  const step = getRandomInt(7) + 1;
  const shift = getRandomInt(20);
  for (let n = 1; n <= max; n += 1) {
    const formula = step * n + shift;
    arr.push(formula);
  }

  return arr;
};

const progressionGame = () => {
  const num = 10;
  const sequence = geometrciSequence(num);
  const index = getRandomInt(num - 1);
  const correctAnswer = sequence[index];
  sequence[index] = '..';

  const question = sequence.join(' ');

  return { name, question, correctAnswer };
};

export default () => startGame(progressionGame);
