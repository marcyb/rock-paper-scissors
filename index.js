let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choice = Math.random();
  if (choice < 0.34) return 'rock';
  if (choice < 0.67) return 'paper';
  return 'scissors';
}

// console.log(getComputerChoice());

function getHumanChoice() {
  const choice = prompt('Please choose rock, paper, or scissors');
  return choice;
}

// console.log(getHumanChoice());

function playRound(humanChoice, computerChoice) {
  const humanSelection = humanChoice.toLowerCase();
  if (humanChoice === computerChoice) {
    console.log('It\'s a tie!');
    return;
  }

  if (humanSelection === 'rock') {
    if (computerChoice === 'scissors') {
      console.log('You win! Rock beats Scissors');
      humanScore++;
    } else {
      console.log('Computer wins! Paper beats Rock');
      computerScore++;
    }
  } else if (humanSelection === 'paper') {
    if (computerChoice === 'rock') {
      console.log('You win! Paper beats Rock');
      humanScore++;
    } else {
      console.log('Computer wins! Scissors beats Paper');
      computerScore++;
    }
  } else if (humanSelection === 'scissors') {
    if (computerChoice === 'paper') {
      console.log('You win! Scissors beats Paper');
      humanScore++;
    } else {
      console.log('Computer wins! Rock beats Scissors');
      computerScore++;
    }
  } else {
    console.log('Invalid choice. Please choose rock, paper, or scissors');
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
