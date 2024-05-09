let computerMove = '';
let result = '';
const score = {
  win: 0,
  lose: 0,
  tie: 0
};

function computerMov() {
  const randomNumber = Math.random();
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissor';
  }
}

function playGame(playerMove) {
  computerMov();
  if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie.';
    } else if (computerMove === 'paper') {
      result = 'You lose';
    } else if (computerMove === 'scissor') {
      result = 'You win.';
    }
  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You win.';
    } else if (computerMove === 'paper') {
      result = 'Tie.';
    } else if (computerMove === 'scissor') {
      result = 'You lose';
    }
  } else if (playerMove === 'scissor') {
    if (computerMove === 'rock') {
      result = 'You lose';
    } else if (computerMove === 'paper') {
      result = 'You win.';
    } else if (computerMove === 'scissor') {
      result = 'Tie.';
    }
  }

  if (result === 'You win.') {
    score.win += 1;
  }else if (result === 'You lose') {
    score.lose += 1;
  }else if (result === 'Tie.') {
    score.tie += 1;
  }

  alert(`You have chose ${playerMove}. 
and computer has chose ${computerMove}
so ${result}.
wins: ${score.win}, Losses: ${score.lose}, Ties: ${score.tie}`);
}

function reset() {
  score.win = 0,
  score.lose = 0,
  score.tie = 0
};