let btnEl = document.getElementById('btn-el');
let inputEl = document.getElementById('input-el');
let costEl = document.getElementById('total-cost');

function subscribe() {
  if (btnEl.innerText === 'Subscribe') {
    btnEl.innerText = 'Subscribed';
  } else {
    btnEl.innerText = 'Subscribe';
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
