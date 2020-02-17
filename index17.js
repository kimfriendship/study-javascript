//17. 배열
const array = [1, 'blabla', 3, 4, 5];
console.log(array);
console.log(array[1]);

const objects = [{
    name: '멍멍이'
  },
  {
    name: '야옹이'
  }
];

console.log(objects);
console.log(objects[1]);

objects.push({
  name: '멍뭉이'
});

console.log(objects);
console.log(objects.length);

//18. 반복문 - for
for (let i = 10; i > 0; i--) {
  console.log(i);
}

for (let i = 0; i < 10; i++) {
  console.log(i);
}

const names = [
  'bark',
  'meow',
  'quack'
];

for (let i = 0; i < names.length; i++) {
  console.log(names[i])
};

//19. 반복문 - while
let i = 0;

while (i < 10) {
  console.log(i);
  i++;
}

let u = 0;
let isFun = false;

while (!isFun) {
  console.log(u);
  u++;
  if (u === 10) {
    isFun = true;
  }
}

//20 반복문 - for of, for in
const numerics = [10, 20, 30, 40, 50];

for (let number of numerics) {
  console.log(number);
}

const texts = ['tlq', 'dltlq', 'tkatlq', 'tktlq', 'dhtlq'];

for (let text of texts) {
  console.log(text);
}

const bori = {
  name: '보리',
  sound: '엉뫄',
  age: 1
};

console.log(Object.keys(bori));
console.log(Object.values(bori));
console.log(Object.entries(bori));

for (let key in bori) {
  console.log(`${key}: ${bori[key]}`);
}

//21. 반복문 - continue, break
for (let x = 0; x < 10; x++) {
  if (x === 2) continue;
  console.log(x);
  if (x === 5) break;
}