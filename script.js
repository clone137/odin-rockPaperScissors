'use strict';

function computerPlay() {
  let rockPaperScissors = ['rock', 'paper', 'scissors'];
  let selection = Math.floor(Math.random() * 3);
  return rockPaperScissors[selection];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
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

function resetEverything(e) {
  const playerScore = document.querySelector('.playerScoreDivValue');
  const computerScore = document.querySelector('.computerScoreDivValue');
  const infoText = document.querySelector('.infoText');

  playerScore.textContent = 0;
  computerScore.textContent = 0;
  infoText.textContent = '';

  let allButtons = document.querySelectorAll('.rpsButton');
  allButtons.forEach(function (button) {
    button.disabled = false;
  });
}

function buttonPress(e) {
  const playerSelection = e.target.value.toLowerCase();
  const computerSelection = computerPlay();

  const playerScore = document.querySelector('.playerScoreDivValue');
  const computerScore = document.querySelector('.computerScoreDivValue');
  const infoText = document.querySelector('.infoText');

  let result = playRound(playerSelection, computerSelection);
  if (result === 1) {
    playerScore.textContent = parseInt(playerScore.textContent) + 1;
    infoText.textContent = `Player wins this round with ${capitalise(
      playerSelection
    )} beats ${capitalise(computerSelection)}!`;
  } else if (result === -1) {
    computerScore.textContent = parseInt(computerScore.textContent) + 1;
    infoText.textContent = `Computer wins this round with ${capitalise(
      computerSelection
    )} beats ${capitalise(playerSelection)}!`;
  } else {
    infoText.textContent = `Draw - both players chose ${playerSelection}`;
  }

  if (parseInt(playerScore.textContent) === 5) {
    infoText.textContent = `PLAYER WINS WITH 5::${parseInt(
      computerScore.textContent
    )}`;
    let allButtons = document.querySelectorAll('.rpsButton');
    allButtons.forEach(function (button) {
      button.disabled = true;
    });
  } else if (parseInt(computerScore.textContent) === 5) {
    infoText.textContent = `COMPUTER WINS WITH 5::${parseInt(
      playerScore.textContent
    )}`;
    let allButtons = document.querySelectorAll('.rpsButton');
    allButtons.forEach(function (button) {
      button.disabled = true;
    });
  }
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
  let container = document.querySelector('.container');

  // NOTE add an event listener to the rock, paper, scissors buttons
  let allButtons = document.querySelectorAll('.rpsButton');
  allButtons.forEach(function (currentValue) {
    currentValue.addEventListener('click', buttonPress);
  });

  // NOTE add an event listener to the reset button
  let resetButton = document.querySelector('.resetButton');
  resetButton.addEventListener('click', resetEverything);
}

game();
