let btnEl = document.querySelector('.btn-el');
let inputEl = document.getElementById('input-el');
let costEl = document.getElementById('total-cost');

function subscribe() {
  if (btnEl.innerText === 'Subscribe') {
    btnEl.innerText = 'Subscribed';
    btnEl.classList.add('is-subscribed');
  } else {
    btnEl.innerText = 'Subscribe';
    btnEl.classList.remove('is-subscribed');
  }
}

function calculate() {
  let cost = Number(inputEl.value);
  if (cost < 40) {
    cost += 10;
  }
  costEl.innerText = `$${cost}`;
}

function handleCostKeydown(event) {
  if (event.key === 'Enter') {
    calculate();
  }
}
