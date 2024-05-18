const jsButtonEl = document.querySelector('.js-button');

const check = jsButtonEl.classList.contains('js-button');
console.log(check);

const gamingEl = document.querySelector('.game');

function toggled() {
  let checkToggle = gamingEl.classList.contains('is-toggled');
  if (checkToggle == false) {
    gamingEl.classList.add('is-toggled');
  } else {
    gamingEl.classList.remove('is-toggled');
  }
}
