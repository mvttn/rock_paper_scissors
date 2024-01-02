function getComputerChoice() {
  let choices = ["Rock", "Paper", "Scissors"];
  let randomIndex = Math.floor(Math.random() * choices.length);
  let computerChoice = choices[randomIndex];

  return computerChoice;
}

function normaliseInput(input) {
  if (input.length === 0) {
    return;
  }
  return input[0].toUpperCase() + input.substring(1).toLowerCase();
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log("Draw! Go again!");
    playerSelection = normaliseInput(prompt("Enter your selection: "));
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
  } else if (playerSelection === "Rock" && computerSelection === "Paper") {
    return "You Lost! Paper beats Rock.";
  } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    return "You Win! Rock beats Scissors.";
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    return "You Win! Paper beats Rock.";
  } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
    return "You Lost! Scissors beats Paper.";
  } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
    return "You Lost! Rock beats Scissors.";
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    return "You Lost! Scissors beats Paper.";
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = normaliseInput(prompt("Enter your selection: "));
    let computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
  }
}

game();
