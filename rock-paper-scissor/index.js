function rock() {
  const randomNumber = Math.random();

  if (randomNumber < 1 / 3) {
    console.log('rock');
  } else if (randomNumber < 2 / 3) {
    console.log('Paper');
  } else {
    console.log('scissor');
  }
}
