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
  console.log(
    `Your selection: ${playerSelection} ## Opponent Selection: ${computerSelection}`
  );
  if (playerSelection === computerSelection) {
    console.log("Draw! Go again!");
    return undefined;
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
  } else {
    // playerSelection === "Scissors" && computerSelection === "Paper"
    return "You Win! Scissors beats Paper.";
  }
}

function game(numberOfRounds) {
  for (let i = 0; i < numberOfRounds; i++) {
    let playerSelection = normaliseInput(prompt("Enter your selection: "));
    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
    if (result == undefined) {
      i--;
      continue;
    }
    console.log(result);
  }
}

game(5);
