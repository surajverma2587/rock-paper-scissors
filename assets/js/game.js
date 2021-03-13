// Declare global data
let userWins = 0;
let userLosses = 0;
let userTies = 0;

let playerChoice;
let computerChoice;
let isPlay = true;

const validChoices = ["R", "P", "S"];

// validate player choice
const validateChoice = function () {
  switch (playerChoice) {
    case "R":
      return true;
    case "P":
      return true;
    case "S":
      return true;
    default:
      return false;
  }
};

// randomly generate computer choice
const randomChoiceGenerator = function () {
  const randomIndex = Math.floor(Math.random() * 3);
  const randomChoice = validChoices[randomIndex];
  return randomChoice;
};

// apply game logic to check who wins and update scores of winner/loser
const gameLogic = function () {
  console.table({ playerChoice, computerChoice });
  /*
  player  computer winner
  R       R
  R       P
  R       S
  P       R
  P       P
  P       S
  S       R
  S       P
  S       S
*/

  if (playerChoice === "R" && computerChoice === "R") {
    // userTies = userTies + 1
    userTies += 1;
  }

  if (playerChoice === "R" && computerChoice === "P") {
    userLosses += 1;
  }

  if (playerChoice === "R" && computerChoice === "S") {
    userWins += 1;
  }

  if (playerChoice === "P" && computerChoice === "R") {
    userWins += 1;
  }

  if (playerChoice === "P" && computerChoice === "P") {
    userTies += 1;
  }

  if (playerChoice === "P" && computerChoice === "S") {
    userLosses += 1;
  }

  if (playerChoice === "S" && computerChoice === "R") {
    userLosses += 1;
  }

  if (playerChoice === "S" && computerChoice === "P") {
    userWins += 1;
  }

  if (playerChoice === "S" && computerChoice === "S") {
    userTies += 1;
  }
};

// display scores
const displayScores = function () {
  const result = {
    wins: userWins,
    losses: userLosses,
    ties: userTies,
  };
  console.table(result);
};

const game = function () {
  // Prompt player for choice
  playerChoice = prompt("Please enter your choice (R, P, or S):");

  if (validateChoice()) {
    computerChoice = randomChoiceGenerator();
    gameLogic();
    displayScores();

    // present confirm option to play again
    isPlay = confirm("Do you want to continue to play?");
  } else {
    alert("Please choose from the valid options: R, P, S");
    isPlay = false;
  }
};

// App starts here

while (isPlay) {
  game();
}

console.log("END");
