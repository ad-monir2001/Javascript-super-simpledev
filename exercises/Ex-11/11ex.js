const nums = [10, 20, 30];

console.log(nums);

nums[nums.length-1] = 99;
console.log(nums);

function getLastValue(array) {
    const lastIndex = array.length-1
    return array[lastIndex]
}

console.log(getLastValue([10, 15, 84]));
console.log(getLastValue(['hello', 'good morning', 'Nice Weather']));