import readlineSync from 'readline-sync';

export const getRandomInt = (max) => Math.floor(Math.random() * max);

export const startGame = (game) => {
    for (let i = 0; i < 3; i += 1) {
        const data = game();
        console.log(`Question: ${data.question}`);

        const userAnswer = readlineSync.question('Your answer: ');

        if (data.correctAnswer.toString() === userAnswer) {
            console.log(i === 2 ? `Congratulations, ${data.name}!` : 'Correct!');
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${data.correctAnswer}'.`);
            console.log(`Let's try again, ${data.name}!`);
            return;
        }
    }
}
