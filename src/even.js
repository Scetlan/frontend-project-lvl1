import readlineSync from 'readline-sync';
import startGame from './cli.js';

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

const invertAnswer = (answer) => (answer === 'yes' ? 'no' : 'yes');

const getRandomInt = (max) => Math.floor(Math.random() * max);

export default () => {
  const name = startGame();

  console.log("Answer 'yes' if the number is even, otherwise answer 'no'.");

  for (let i = 0; i < 3; i += 1) {
    const randomNum = getRandomInt(30);
    console.log(`Question: ${randomNum}`);

    const answer = readlineSync.question('Your answer: ');

    if (isEven(randomNum) === answer) {
      console.log(i === 2 ? `Congratulations, ${name}!` : 'Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${invertAnswer(answer)}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
};
