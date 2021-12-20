let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 10)
};

const getAbsoluteDistance = (guess, num) => {
  return Math.abs(num - guess);
};

const compareGuesses = (humanGuess, compGuess, secretNumber) => {
  if ((humanGuess>=0)&&(humanGuess<=9)){
    return (getAbsoluteDistance(humanGuess, secretNumber) <= getAbsoluteDistance(compGuess, secretNumber)) ? true : false;
  } else {
    alert('Wrong number!!!')
  };
};

const updateScore = (checkWinner) => {
  if (checkWinner === 'human') {
    humanScore ++;  
  } else if (checkWinner === 'computer') {
    computerScore ++;
  }
};

const advanceRound = () => {
  currentRoundNumber ++;
}

