/* 11a solve */

const nums = [10, 20, 30];

console.log(nums);

nums[nums.length - 1] = 99;
console.log(nums);

/* 11b solve */

function getLastValue(array) {
  const lastIndex = array.length - 1;
  return array[lastIndex];
}

console.log(getLastValue([10, 15, 84]));
console.log(getLastValue(['hello', 'good morning', 'Nice Weather']));

/* 11c solve */

function arraySwap(array) {
  const SwapArray = array.reverse();
  return SwapArray;
}

console.log(arraySwap([40, 5, 54]));
console.log(arraySwap(['good', 'bad', true, 4]));

/* 11d solve */

for (i = 0; i <= 10; i += 2) {
  console.log(i);
}
