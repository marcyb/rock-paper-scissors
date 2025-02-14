function getComputerChoice() {
  const choice = Math.random();
  if (choice < 0.34) return 'rock';
  if (choice < 0.67) return 'paper';
  return 'scissors';
}

// console.log(getComputerChoice());

function getHumanChoice() {
  const choice = prompt('Please choose (r)ock, (p)aper, or (s)cissors');
  return choice;
}

console.log(getHumanChoice());
