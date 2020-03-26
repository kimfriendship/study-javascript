// Number Property-------------------------------------------------------
// 1. Number.EPSILON
console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.1 + 0.3 == 0.3); // false

function isEqual (a, b) {
  return Math.abs(a - b) < Number.EPSILON;
}

console.log(isEqual(0.1 + 0.3, 0.4)); // true


// 2. Number.MAX_VALUE
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Infinity > Number.MAX_VALUE); // true


// 3. Number.MIN_VALUE
console.log(Number.MIN_VALUE); // 5e-324
console.log(Number.MIN_VALUE > 0); // true


// 4. Number.POSITIVE_INFINITY
console.log(Number.POSITIVE_INFINITY); // Infinity


// 5. Number.NEGATIVE_INFINITY
console.log(Number.NEGATIVE_INFINITY); // -Infinity


// 6. Number.NaN
console.log(new Number('xyz')); // [Number: NaN]


// Number Method-----------------------------------------------------------
// 1. Number.isFinite
console.log(Number.isFinite(Infinity)); // false
console.log(Number.isFinite(NaN)); // false
console.log(Number.isFinite('Hi')); // false
console.log(Number.isFinite(20000)); // true
console.log(Number.isFinite(2e64)); // true
console.log(Number.isFinite(null)); // false

console.log(isFinite(null)); // true
console.log(isFinite(undefined)); // false
console.log(isFinite(0)); // true
console.log(isFinite('Wow')); // false


// 2. Number.isInteger
console.log(Number.isInteger(123)); // true
console.log(Number.isInteger(-123)); // true
console.log(Number.isInteger(5 - 3)); // true
console.log(Number.isInteger(0.54)); // false
console.log(Number.isInteger('12')); // false
console.log(Number.isInteger(Infinity)); // false
console.log(Number.isInteger(0 / 0)); // false


// 3. Number.isNaN
console.log(Number.isNaN('12')); // false
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN(undefined)); // false
console.log(Number.isNaN(null)); // false
console.log(Number.isNaN({})); // false
console.log(Number.isNaN(true)); // false
console.log(Number.isNaN('')); // false

console.log(isNaN('hello')); // true
console.log(isNaN('35')); // false
console.log(isNaN(13 + 532)); // false
console.log(isNaN(new Date())); // false
console.log(isNaN(new Date().toString)); // true


// 4. Number.isSafeInteger
console.log(Number.isSafeInteger(12)); // true
console.log(Number.isSafeInteger(1000000000000000)); // true
console.log(Number.isSafeInteger(10000000000000001)); // false
console.log(Number.isSafeInteger(0.34)); // false
console.log(Number.isSafeInteger(Infinity)); // false
console.log(Number.isSafeInteger(0 / 0)); // false
console.log(Number.isSafeInteger('43')); // false


// 5. Number.prototype.toExponential
const num = 77.5434;

console.log(num.toExponential()); // 7.75434e+1
console.log(num.toExponential(4)); // 7.7543e+1
console.log(num.toExponential(2)); // 7.75e+1
console.log(77.5434.toExponential()); // 7.75434e+1
console.log(77 .toExponential()); // 7.7e+1


// 6. Number.prototype.toFixed
console.log(num.toFixed()); // 78
console.log(num.toFixed(1)); // 77.5
console.log(num.toFixed(2)); // 77.54


// 7. Number.protoype.toPrecision
console.log(num.toPrecision()); // 77.5434
console.log(num.toPrecision(1)); // 8e+1
console.log(num.toPrecision(2)); // 78
console.log(num.toPrecision(3)); // 77.5


// 8. Number.prototype.toString
console.log(num.toString()); // '77.5434'
console.log((43).toString()); // '43'
console.log((16).toString(2)); // '10000'
console.log((-10).toString(8)); // '-12'


// 9. Number.prototype.valueOf
const numObj = new Number(num);

console.log(typeof numObj); // object
console.log(numObj.valueOf()); // 77.5434
console.log(typeof (numObj.valueOf())); // number
