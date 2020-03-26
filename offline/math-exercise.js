// 1. Math.PI
console.log(Math.PI); // 3.141592653589793


// 2. Math.abs
console.log(Math.abs(-1)); // 1
console.log(Math.abs('-1')); // 1
console.log(Math.abs('')); // 0
console.log(Math.abs(null)); // 0
console.log(Math.abs('string')); // NaN
console.log(Math.abs(undefined)); // NaN
console.log(Math.abs()); // NaN


// 3. Math.round
console.log(Math.round(1.4)); // 1
console.log(Math.round(5)); // 5
console.log(Math.round(-35.78)); // -36
console.log(Math.round()); // NaN


// 4. Math.ceil
console.log(Math.ceil(3.5)); // 4
console.log(Math.ceil(1.3)); // 2
console.log(Math.ceil(-4.34)); // -4
console.log(Math.ceil(1)); // 1
console.log(Math.ceil()); // NaN


// 5. Math.fllor
console.log(Math.floor(3.7)); // 3
console.log(Math.floor(3.2)); // 3
console.log(Math.floor(-2.2)); // -3
console.log(Math.floor(-2.9)); // -3
console.log(Math.floor(3)); // 3
console.log(Math.floor('hoho')); // NaN


// 6. Math.sqrt
console.log(Math.sqrt(9)); // 3
console.log(Math.sqrt(-9)); //NaN
console.log(Math.sqrt(2)); // 1.4142135623730951
console.log(Math.sqrt(1)); // 1
console.log(Math.sqrt(0)); // 0
console.log(Math.sqrt()); // NaN


// 7. Math.random
console.log(Math.random()); // 0.1436304831865205
console.log(Math.random()); // 0.3030842658276507

const random = Math.floor((Math.random() * 10) + 1);
console.log(random); // 4


// 8. Math.pow
console.log(Math.pow(2, 8)); // 256
console.log(Math.pow(2, -1)); // 0.5
console.log(Math.pow(2)); // NaN


// 9. Math.max
const array = [1, 2, 3, 4, 5, 6];

console.log(Math.max(...array)); // 6


// 10. Math.min
console.log(Math.min(...array)); // 1