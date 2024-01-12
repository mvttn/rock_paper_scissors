let PLAYERSCORE = 0;
let COMPUTERSCORE = 0;

function getComputerChoice() {
  let choices = ["Rock", "Paper", "Scissors"];
  let randomIndex = Math.floor(Math.random() * choices.length);
  let computerChoice = choices[randomIndex];

  return computerChoice;
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

function updateScore(result) {
  if (result[1] === 1) {
    PLAYERSCORE++;
  } else if (result[1] === 0) {
    COMPUTERSCORE++;
  }
  const messageText = result[0];
  const score = document.querySelector("#score");
  const message = document.querySelector("#message");
  score.textContent = `${PLAYERSCORE} : ${COMPUTERSCORE}`;
  message.textContent = messageText;
}

function winnerFound(PLAYERSCORE, COMPUTERSCORE) {
  const message = document.querySelector("#message");
  if (PLAYERSCORE === 5) {
    message.textContent = "Congratulations! You Won!";
    return true;
  } else if (COMPUTERSCORE === 5) {
    message.textContent = "Better luck next time! You Lost!";
    return true;
  }
  return false;
}

function game() {
  const rockButton = document.querySelector("#rock");
  const paperButton = document.querySelector("#paper");
  const scissorsButton = document.querySelector("#scissors");

  rockButton.addEventListener("click", () => {
    let playerSelection = "Rock";
    let computerSelection = getComputerChoice();
    updateScore(playRound(playerSelection, computerSelection));
    if (winnerFound(PLAYERSCORE, COMPUTERSCORE)) {
      PLAYERSCORE = 0;
      COMPUTERSCORE = 0;
      return;
    }
  });
  paperButton.addEventListener("click", () => {
    let playerSelection = "Paper";
    let computerSelection = getComputerChoice();
    updateScore(playRound(playerSelection, computerSelection));
    if (winnerFound(PLAYERSCORE, COMPUTERSCORE)) {
      PLAYERSCORE = 0;
      COMPUTERSCORE = 0;
      return;
    }
  });
  scissorsButton.addEventListener("click", () => {
    let playerSelection = "Scissors";
    let computerSelection = getComputerChoice();
    updateScore(playRound(playerSelection, computerSelection));
    if (winnerFound(PLAYERSCORE, COMPUTERSCORE)) {
      PLAYERSCORE = 0;
      COMPUTERSCORE = 0;
      return;
    }
  });
}

game();
