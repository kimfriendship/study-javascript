// 1. Array.isArray
console.log(Array.isArray([])); // true
console.log(Array.isArray(new Array)); // true
console.log(Array.isArray({})); // false
console.log(Array.isArray({
  0: 1,
  length: 1
})); // false

// 2. Array.prototype.indexOf
const arr = [1, 2, 1, 4];

console.log(arr.indexOf(2)); // 1
console.log(arr.indexOf(1, 1)); // 2

if (!arr.includes(3)) arr.push(3);
console.log(arr); // [ 1, 2, 1, 4, 3 ]

// 3. Array.prototype.push (mutator)
console.log(arr.push(5)); // 6

arr[arr.length] = 6;
console.log(arr); // [1, 2, 1, 4, 3, 5, 6]

let newArr = [...arr, 7];
console.log(newArr); // [1, 2, 1, 4, 3, 5, 6, 7]

// 4. Array.prototype.pop (mutator)
console.log(arr.pop(1)); // 6
console.log(arr);

// 5. Array.prototype.unshift (mutator)
arr.unshift(-1, 0);
console.log(arr); // [-1, 0, 1, 2, 1, 4, 3, 5]

newArr = [-2, ...arr];
console.log(newArr); // [-2, -1, 0, 1, 2, 1,  4, 3, 5]

// 6. Array.prototype.shift (mutator)