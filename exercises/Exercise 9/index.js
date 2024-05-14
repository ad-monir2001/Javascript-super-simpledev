let headEl = document.getElementById('head-el');


let resultEl = document.querySelector('.result');

function hd() {
  return resultEl.innerText = `You chose: heads`;
}

// TODO: change the two function with argument to short the code.
// if (hd('heads') === 'heads') {
//   function hd() {
//     return resultEl.innerText = `You chose: heads`;
//   }
// }

function tl() {
  return resultEl.innerText = `You chose: tails`;
}