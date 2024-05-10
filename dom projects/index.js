let btnEl = document.getElementById('btn-el');

function subscribe() {
  if (btnEl.innerText === 'Subscribe') {
    btnEl.innerText = 'Subscribed';
  } else {
    btnEl.innerText = 'Subscribe';
  }
}

console.log(btnEl);