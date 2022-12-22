import greetings from './cli.js';
import { getRandomInt, startGame } from './index.js';

const name = greetings();
console.log('Answer "yes" if given number is prime. Otherwise answer "no"');

const isPrime = (num) => {
  if (num < 2) {
    return 'no';
  }
  let j = 0;
  for (let i = 2; i * i <= num && j !== 1; i += 1) {
    if (num % i === 0) {
      j = 1;
    }
  }
  if (j === 1) {
    return 'no';
  }
  return 'yes';
};

const primeGame = () => {
  const question = getRandomInt(100);

  const correctAnswer = isPrime(question);

  return { name, question, correctAnswer };
};

export default () => startGame(primeGame);
