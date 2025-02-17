let humanScore = 0;
let computerScore = 0;

let rockButton = document.getElementById("rock");
let paperButton = document.getElementById("paper");
let scissorsButton = document.getElementById("scissors");

let resultTextElement = document.getElementById("result-text");

let humanScoreElement = document.getElementById("human-score");
let computerScoreElement = document.getElementById("computer-score");

let winnerMsg = document.getElementById("winner");

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

function playRound(humanChoice, computerChoice) {
  const humanSelection = humanChoice.toLowerCase();
  if (humanChoice === computerChoice) {
    resultTextElement.textContent = "It's a tie!";
    return;
  }

  if (humanSelection === "rock") {
    if (computerChoice === "scissors") {
      resultTextElement.textContent = "You win! Rock beats Scissors";
      humanScore++;
    } else {
      resultTextElement.textContent = "Computer wins! Paper beats Rock";
      computerScore++;
    }
  } else if (humanSelection === "paper") {
    if (computerChoice === "rock") {
      resultTextElement.textContent = "You win! Paper beats Rock";
      humanScore++;
    } else {
      resultTextElement.textContent = "Computer wins! Scissors beats Paper";
      computerScore++;
    }
  } else if (humanSelection === "scissors") {
    if (computerChoice === "paper") {
      resultTextElement.textContent = "You win! Scissors beats Paper";
      humanScore++;
    } else {
      resultTextElement.textContent = "Computer wins! Rock beats Scissors";
      computerScore++;
    }
  }
  updateUI();
}

let resetButton = document.createElement("button");
resetButton.id = "reset";
resetButton.textContent = "Reset";
resetButton.addEventListener("click", function () {
  humanScore = 0;
  computerScore = 0;
  updateUI();
  document.getElementById("reset").remove();
});

function updateUI() {
  humanScoreElement.textContent = `Player: ${humanScore}`;
  computerScoreElement.textContent = `Computer: ${computerScore}`;
  if (humanScore >= 5 || computerScore >= 5) {
    if (humanScore > computerScore) {
      winnerMsg.textContent = "Winner: Player";
    } else {
      winnerMsg.textContent = "Winner: Computer";
    }
    document.getElementById("result").appendChild(resetButton);
  }
}
