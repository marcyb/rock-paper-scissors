let humanScore = 0;
let computerScore = 0;

let rockButton = document.getElementById("rock");
let paperButton = document.getElementById("paper");
let scissorsButton = document.getElementById("scissors");

rockButton.addEventListener("click", function () {
  playRound("rock", getComputerChoice());
});

paperButton.addEventListener("click", function () {
  playRound("paper", getComputerChoice());
});

scissorsButton.addEventListener("click", function () {
  playRound("scissors", getComputerChoice());
});

function getComputerChoice() {
  const choice = Math.random();
  if (choice < 0.34) return "rock";
  if (choice < 0.67) return "paper";
  return "scissors";
}

function getHumanChoice() {
  const choice = prompt("Please choose rock, paper, or scissors");
  return choice;
}

function playRound(humanChoice, computerChoice) {
  const humanSelection = humanChoice.toLowerCase();
  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
    return;
  }

  if (humanSelection === "rock") {
    if (computerChoice === "scissors") {
      console.log("You win! Rock beats Scissors");
      humanScore++;
    } else {
      console.log("Computer wins! Paper beats Rock");
      computerScore++;
    }
  } else if (humanSelection === "paper") {
    if (computerChoice === "rock") {
      console.log("You win! Paper beats Rock");
      humanScore++;
    } else {
      console.log("Computer wins! Scissors beats Paper");
      computerScore++;
    }
  } else if (humanSelection === "scissors") {
    if (computerChoice === "paper") {
      console.log("You win! Scissors beats Paper");
      humanScore++;
    } else {
      console.log("Computer wins! Rock beats Scissors");
      computerScore++;
    }
  } else {
    console.log(
      "Invalid choice. Please choose rock, paper, or scissors. Computer wins!"
    );
    computerScore++;
  }
}

// function playGame() {
//   for (let i = 0; i < 5; i++) {
//     const humanSelection = getHumanChoice();
//     const computerSelection = getComputerChoice();
//     playRound(humanSelection, computerSelection);
//   }
//   console.log(`Human Score: ${humanScore}`);
//   console.log(`Computer Score: ${computerScore}`);

//   if (humanScore > computerScore) {
//     console.log("You win!");
//   } else if (humanScore < computerScore) {
//     console.log("Computer wins!");
//   } else {
//     console.log("It's a tie!");
//   }
// }

playGame();
