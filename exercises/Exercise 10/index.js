const jsButtonEl = document.querySelector('.js-button');

const check = jsButtonEl.classList.contains('js-button');
console.log(check);

function gameOn(selector) {
  const button = document.querySelector(selector);
  let checkToggle = button.classList.contains('is-toggled');
  if (checkToggle == false) {
    turnOffPreviousButton();
    button.classList.add('is-toggled');
  } else {
    button.classList.remove('is-toggled');
  }
}

function turnOffPreviousButton() {
  const previousButton = document.querySelector('.is-toggled');
  if (previousButton) {
    previousButton.classList.remove('is-toggled');
  }
}