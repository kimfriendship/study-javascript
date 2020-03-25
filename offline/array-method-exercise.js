// Array Methods ----------------------------------------------------------------
// 1. Array.isArray: returns boolean
console.log(Array.isArray([])); // true
console.log(Array.isArray(new Array)); // true
console.log(Array.isArray({})); // false
console.log(Array.isArray({
  0: 1,
  length: 1
})); // false

// 2. Array.prototype.indexOf: returns index number
const arr = [1, 2, 1, 4];

console.log(arr.indexOf(2)); // 1
console.log(arr.indexOf(1, 1)); // 2

if (!arr.includes(3)) arr.push(3);
console.log(arr); // [ 1, 2, 1, 4, 3 ]

// 3. Array.prototype.push (mutator): returns length of modified array
console.log(arr.push(5)); // 6

arr[arr.length] = 6;
console.log(arr); // [1, 2, 1, 4, 3, 5, 6]

let newArr = [...arr, 7];
console.log(newArr); // [1, 2, 1, 4, 3, 5, 6, 7]

// 4. Array.prototype.pop (mutator): returns removed elements
console.log(arr.pop()); // 6
console.log(arr); // [ 1, 2, 1, 4, 3, 5 ]

// 5. Array.prototype.unshift (mutator): returns length of modified array
arr.unshift(-1, 0);
console.log(arr); // [-1, 0, 1, 2, 1, 4, 3, 5]

newArr = [-2, ...arr];
console.log(newArr); // [-2, -1, 0, 1, 2, 1,  4, 3, 5]

// 6. Array.prototype.shift (mutator): returns removed elements
arr.shift();
console.log(arr); // [0, 1, 2, 1, 4, 3, 5]
newArr.shift(5);
console.log(newArr); // [-1, 0, 1, 2, 1,  4, 3, 5]

// 7. Array.prototype.concat (accessor): returns added new array
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

let result = arr1.concat(arr2);
console.log(result); // [1, 2, 3, 4, 5, 6]
console.log(arr1); // [1, 2, 3]

// 8. Array.porototype.splice (mutator): returns removed elements
let splice = result.splice(1, 2, 20, 30);

console.log(splice); // [2, 3]
console.log(result); // [1, 20, 30, 4, 5, 6]

splice = result.splice(1, 0, 15);

console.log(splice); // []
console.log(result); // [1, 15, 20, 30, 4, 5, 6]

// 9. Array.prototype.slice (accessor): returns copied array
let slice = result.slice(2, 4);

console.log(slice); // [20, 30]
console.log(result); // [1, 15, 20, 30, 4, 5, 6]

slice = result.slice();

console.log(slice); // [1, 15, 20, 30, 4, 5, 6]
console.log(result); // [1, 15, 20, 30, 4, 5, 6]

// 10. Array.prototype.join (accessor): returns joined array
result = slice.join('*');

console.log(result); // 1*15*20*30*4*5*6

// 11. Array.prototype.reverse (mutator): returns modified array
result = slice.reverse();

console.log(result); // [6, 5, 4, 30, 20, 15, 1]
console.log(slice); // [6, 5, 4, 30, 20, 15, 1]

// 12. Array.prototype.fill (mutator): returns modified array
result = slice.fill(0, 3, 6);

console.log(result); // [6, 5, 4, 0, 0, 0, 1]
console.log(slice); // [6, 5, 4, 0, 0, 0, 1]

// 13. Array.prototype.includes: returns boolean
result = arr.includes(3);

console.log(result); // true

result = slice.includes(0, -3);

console.log(result); // true

//14. Array.prototype.flat
const unflat = [1, [2, 3, [4, 5, [6]]]];

console.log(unflat.flat()); // [ 1, 2, 3, [ 4, 5, [ 6 ] ] ]
console.log(unflat.flat(2)); // [ 1, 2, 3, 4, 5, [ 6 ] ]
console.log(unflat.flat(Infinity)); // [ 1, 2, 3, 4, 5, 6 ]

// HOF Methods----------------------------------------------------------------
// 1. Array.prototype.sort
const fruits = ['Banana', 'Orange', 'Apple'];

fruits.sort();

console.log(fruits); // [ 'Apple', 'Banana', 'Orange' ]

// 2. Array.prototype.forEach
const numbers = [1, 2, 3, 4, 5, 6, 7];
let pows = [];

numbers.forEach(item => pows.push(item ** 2));

console.log(pows); // [1,  4,  9, 16, 25, 36, 49]


// 3. Array.prototype.map
// 4. Array.prototype.filter
// 5. Array.prototype.reduce
// 6. Array.prototype.some
// 7. Array.prototype.every
// 8. Array.prototype.find
// 9. Array.prototype.findIndex
// 10. Array.prototype.flatMap