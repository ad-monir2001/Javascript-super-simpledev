let computerMove = '';
let result = '';
const score = JSON.parse(localStorage.getItem('score'));
let resultEl = document.getElementById('result-el');
let turnEl = document.getElementById('turn-el');
let overViewEl = document.getElementById('overView-el');

function autoPlay() {
  setInterval(function () {
    const playerMove = computerMov();
    playGame(playerMove);
  }, 1000);
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
  } else if (result === 'You lose') {
    score.lose += 1;
  } else if (result === 'Tie.') {
    score.tie += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  resultEl.innerText = result;
  turnEl.innerHTML = `You <img src="./images/${playerMove}-emoji.png" alt="" class="imoji"> - <img src="./images/${computerMove}-emoji.png" alt="" class="imoji"> Computer`;
  overViewEl.innerText = `Wins: ${score.win}, Losses: ${score.lose}, Ties: ${score.tie}`;
}

function reset() {
  (score.win = 0), (score.lose = 0), (score.tie = 0);
}

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
