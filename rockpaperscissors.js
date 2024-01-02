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

