// ! Array in javascript.

var studentNumber = [33, 82, 54, 25, 23];

// to know a number position in array we use.

console.log(studentNumber.indexOf(23)); // ? expected output 4.

// in a position which array is located we use.

console.log(studentNumber[3]);  // ? expected output 25.


// to add a number on the last position in an array.
console.log(studentNumber);

studentNumber.push(12);

console.log(studentNumber);

// to remove a number on the last position in an array.

studentNumber.pop();

console.log(studentNumber);

// to know the length of an array .

console.log(studentNumber.length);

// to add a number on the first position in an array.

var bag = [22, 15, 45, 41, 98];

bag.unshift(12);

console.log(bag);


// to remove a number from the first position.

var thole = [12, 54, 62, 2];

console.log(thole);

thole.shift();

console.log(thole);