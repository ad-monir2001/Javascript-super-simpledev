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

for (i = 0; i <= 10; i += 3) {
  console.log(i);
}

/**! 11e solve */

for (i = 5; i >= 0; i--) {
  console.log(i);
}

/** 11f solve */
while (i < 10) {
  i++;
  console.log(i);
}

/** 11g solve */
console.log('solve of 11g');
let numbers = [1, 2, 3];
let result = [];
for (i = 0; i < numbers.length; i++) {
  result.push(numbers[i] + 1);
}

console.log(result);

/** 11h solve */
/** 11i solve */

let increasedValue = [];

function addOne(array, increasedBy) {
  for (i = 0; i < array.length; i++) {
    increasedValue.push(array[i] + increasedBy);
  }

  return increasedValue;
}

console.log(addOne([1, 3, 5], 50));
console.log(addOne([-1, -2, 0], 5));

/** 11j solve */

let sumOfTwoArray = [];

function addArrays(array1, array2) {
  for (i = 0; i < array1.length; i++) {
    sumOfTwoArray.push(array1[i] + array2[i]);
  }
  return sumOfTwoArray;
}

console.log(addArrays([1, 1, 2, 5], [2, 4, 9, 4, 7]));

/** 11k solve */

console.log('solve of 11k');

let towArray = [];

function countPositive(nums) {
  for (i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      towArray.push(nums[i]);
    }
  }
  return towArray.length;
}

console.log(countPositive([1, -5, 4, -7, -14, 0, 9]));
