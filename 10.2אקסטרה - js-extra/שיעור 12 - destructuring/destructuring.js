const arr = [1, 2, 3, 4, 5];

console.log("** this is the old way **");
// this is the old way
const num1 = arr[0];
const num2 = arr[1];
const result = (num1 + num2) * 4;

console.log(result); // 12

console.log("** this is the new way **");

// this is the new way
const [first, second, bla] = arr;

console.log((first + second) * 4); // 12
console.log(bla); // 3



