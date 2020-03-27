// 1. String.length
let string = 'Hello';
console.log(string.length);


// 2. String.prototype.charAt
console.log(string.charAt(0)); // H
console.log(string.charAt(6)); // ''


// 3. String.prototype.concat
console.log(string.concat(' Kim')); // Hello Kim
console.log(string.concat(' Kim', ' Woojung.', 'Nice to', ' see you!')); // Hello Kim Woojung.Nice to see you!


// 4. String.prototype.indexOf
console.log(string.indexOf('e')); // 1
console.log(string.indexOf('l', 3)); // 3
console.log(string.indexOf('!')); // -1


// 5. String.prototype.lastIndexOf
string = 'Hello World';

console.log(string.lastIndexOf('l')); //9
console.log(string.lastIndexOf('l', 4)); // 3
console.log(string.lastIndexOf('o')); // 7


// 6. String.prototype.replace
console.log(string.replace('World', 'Woojung')); // Hello Woojung
console.log(string.replace('World', '<\^__^>$&<^__^/>')); // Hello <^__^>World<^__^/>


// 7. String.prototype.split
string = 'How are you doing?';

console.log(string.split()); // [ 'How are you doing?' ]
console.log(string.split(' ')); // [ 'How', 'are', 'you', 'doing?' ]
console.log(string.split(' ', 3)); // [ 'How', 'are', 'you' ]
console.log(string.split('o')); // [ 'H', 'w are y', 'u d', 'ing?' ]


// 8. String.prototype.substring
console.log(string.substring(1, 4)); // ow
console.log(string.substring(4, 1)); // ow
console.log(string.substring(5)); // re you doing?
console.log(string.substring(-9)); // How are you doing?
console.log(string.substring(1, 20)); // ow are you doing?
console.log(string.substring(3, '')); // How
console.log(string.substring(3, undefined)); //  are you doing?


// 9. String.prototype.slice
console.log(string.slice(-4)); // ing?
console.log(string.slice(0, -2)); // How are you doin


// 10. String.prototype.toLowerCase
console.log(string.toLowerCase()); // how are you doing?


// 11. String.prototoype.toUpperCase
console.log(string.toUpperCase()); // HOW ARE YOU DOING?


// 12. String.prototoype.trim
string = '   Claire   ';

console.log(string.trim()); // Claire


// 13. String.prototype.repeat
console.log('abc'.repeat());
console.log('abc'.repeat(1)); // abc
console.log('abc'.repeat(2)); // abcabc
console.log('abc'.repeat(2.5)); // abcabc
//console.log('abc'.repeat(-1)); // RangeError: Invalid count value


// 14. String.prototype.includes
console.log(string.includes('hello')); // false
console.log(string.includes('claire')); // false
console.log(string.includes('Claire')); // true
console.log(string.includes(' ')); // true
console.log(string.includes(' ', 4)); // true