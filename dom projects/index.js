let btnEl = document.querySelector('.btn-el');

function subscribe() {
  if (btnEl.innerText === 'Subscribe') {
    btnEl.innerText = 'Subscribed';
    btnEl.classList.add('is-subscribed');
  } else {
    btnEl.innerText = 'Subscribe';
    btnEl.classList.remove('is-subscribed');
  }
}

let inputEl = document.getElementById('input-el');
let costEl = document.getElementById('total-cost');

function calculate() {
  let cost = Number(inputEl.value);
  if (cost < 40 && cost > 0) {
    cost += 10;
    costEl.innerText = `$${cost}`;
    costEl.classList.remove('red');
  } else if (cost < 0) {
    costEl.innerText = `Error: cost cannot be less than $0`;
    costEl.classList.add('red');
  }else{
    costEl.innerText = `$${cost}`;
    costEl.classList.remove('red');
    
  }
  inputEl.value = '';
}

function handleCostKeydown(event) {
  if (event.key === 'Enter') {
    calculate();
  }
}
