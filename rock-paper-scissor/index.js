let computerMove = '';
let result = '';

function computerMv() {
  const randomNumber = Math.random();
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissor';
  }
}

function rock() {
  computerMv();
  if (computerMove === 'rock') {
    result = 'Tie.';
  } else if (computerMove === 'paper') {
    result = 'You lose.';
  } else if (computerMove === 'scissor') {
    result = 'You win.';
  }
  alert(`You have chose rock 
and computer has chose ${computerMove}
so ${result}`);
}

function paper() {
  computerMv();

  if (computerMove === 'rock') {
    result = 'You win.';
  } else if (computerMove === 'paper') {
    result = 'Tie.';
  } else if (computerMove === 'scissor') {
    result = 'You lose.';
  }
  alert(`You have chose paper
and computer has chose ${computerMove}
so ${result}`);
}

function scissor() {
  computerMv();

  if (computerMove === 'rock') {
    result = 'You lose';
  } else if (computerMove === 'paper') {
    result = 'You win.';
  } else if (computerMove === 'scissor') {
    result = 'Tie.';
  }
  alert(`You have chose scissor 
and computer has chose ${computerMove}
so ${result}`);
}