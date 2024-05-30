/** Solve 12a */

let add = function () {
  console.log(2 + 3);
};

add();
add();

/** Solve 12b */

function runTwice(fun) {
  fun();
  fun();
}

runTwice(function () {
  console.log('12b');
});

runTwice(add);

/** solve of 12c  */

function finish() {
  let btnEl = document.getElementById('btn-el');
  setTimeout(function () {
    btnEl.innerText = 'Finished!';
  }, 1000);
}
