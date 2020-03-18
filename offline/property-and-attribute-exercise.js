console.log(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__"))

console.log(Object.getOwnPropertyDescriptor(function () {}, "prototype"))


const person = {};

Object.defineProperty(person, 'name', {
  value: 'claire',
  writbale: true,
  enumerable: true,
  configurable: true
});