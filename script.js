'use strict';

function computerPlay() {
  let rockPaperScissors = ['rock', 'paper', 'scissors'];
  let selection = Math.floor(Math.random() * 3);
  return rockPaperScissors[selection];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() === computerSelection) {
    return 0;
  }

  return playerSelection === 'rock' && computerSelection === 'scissors'
    ? 1
    : playerSelection === 'paper' && computerSelection === 'rock'
    ? 1
    : playerSelection === 'scissors' && computerSelection === 'paper'
    ? 1
    : -1;
}

const capitalise = (word) =>
  word[0].toUpperCase() + word.slice(1).toLowerCase();

const overAllWinner = (playerScore, computerScore) =>
  playerScore > computerScore
    ? `Player wins with ${playerScore}:${computerScore}!`
    : computerScore > playerScore
    ? `Computer wins with ${computerScore}:${playerScore}!`
    : `It's a draw with ${playerScore}:${computerScore}!`;

function game() {
  let playerScore = 0;
  let computerScore = 0;
  const numRounds = 5;

  for (let i = 0; i < numRounds; i++) {
    let playerSelection = prompt(
      'Enter "rock", "paper" or "scissors" to make your choice'
    );
    let computerSelection = computerPlay();

    console.log('--- NEW ROUND ---');
    console.log(computerSelection);

    let result = playRound(playerSelection, computerSelection);
    if (result === 1) {
      playerScore++;
      console.log(
        `Player wins this round with ${capitalise(
          playerSelection
        )} beats ${capitalise(computerSelection)}!`
      );
    } else if (result === -1) {
      computerScore++;
      console.log(
        `Computer wins this round with ${capitalise(
          computerSelection
        )} beats ${capitalise(playerSelection)}!`
      );
    } else {
      console.log(`Draw - both players chose ${playerSelection}`);
    }

    console.log(
      `Current score - Player (${playerScore}) : (${computerScore}) Computer`
    );
  }
  console.log('--- OVERALL WINNER ---');
  console.log(overAllWinner(playerScore, computerScore));
}

game();
