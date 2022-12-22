import greetings from './cli.js';
import { getRandomInt, startGame } from './index.js';

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

const name = greetings();
console.log("Answer 'yes' if the number is even, otherwise answer 'no'.");

const evenGames = () => {
  const question = getRandomInt(30);
  const correctAnswer = isEven();

  return { name, question, correctAnswer };
};

export default () => startGame(evenGames);
