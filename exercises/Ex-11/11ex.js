const nums = [10, 20, 30];

console.log(nums);

nums[nums.length - 1] = 99;
console.log(nums);

function getLastValue(array) {
  const lastIndex = array.length - 1;
  return array[lastIndex];
}

console.log(getLastValue([10, 15, 84]));
console.log(getLastValue(['hello', 'good morning', 'Nice Weather']));

function arraySwap(array) {
  const SwapArray = array.reverse();
  return SwapArray;
}

console.log(arraySwap([40, 5, 54]));
console.log(arraySwap(['good', 'bad', true, 4]));
