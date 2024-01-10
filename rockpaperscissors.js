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
    `Your selection: ${playerSelection} ### Opponent Selection: ${computerSelection}`
  );
  // Draw: -1, Win: 1, Loss: 0
  if (playerSelection === computerSelection) {
    return ["Draw! Go again!", -1];
  } else if (playerSelection === "Rock" && computerSelection === "Paper") {
    return ["You Lost! Paper beats Rock.", 0];
  } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    return ["You Win! Rock beats Scissors.", 1];
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    return ["You Win! Paper beats Rock.", 1];
  } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
    return ["You Lost! Scissors beats Paper.", 0];
  } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
    return ["You Lost! Rock beats Scissors.", 0];
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    return ["You Win! Scissors beats Paper.", 1];
  } else {
    return undefined;
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  const p = document.querySelector("p");
  const rockButton = document.createElement("button");
  const paperButton = document.createElement("button");
  const scissorsButton = document.createElement("button");

  rockButton.textContent = "Rock!";
  paperButton.textContent = "Paper!";
  scissorsButton.textContent = "Scissors!";
  p.appendChild(rockButton);
  p.appendChild(paperButton);
  p.appendChild(scissorsButton);

  let playerSelection;
  rockButton.addEventListener("click", () => {
    playerSelection = "Rock";
  });
  paperButton.addEventListener("click", () => {
    playerSelection = "Paper";
  });
  paperButton.addEventListener("click", () => {
    playerSelection = "Scissors";
  });

  let computerSelection = getComputerChoice();
  let result = playRound(playerSelection, computerSelection);

  if (result[1] === 1) {
    playerScore++;
  } else {
    // result[1] === 0
    computerScore++;
  }
  console.log(result[0]);
  if (playerScore > computerScore) {
    console.log(`You Win! Score: ${playerScore}:${computerScore}`);
  } else if (playerScore < computerScore) {
    console.log(`You Lose! Score: ${playerScore}:${computerScore}`);
  } else {
    console.log(`Draw! Score: ${playerScore}:${computerScore}`);
  }
}

game();
