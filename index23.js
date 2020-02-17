//23. 배열 내장함수 - for each
const superheroes = ['ironMan', 'captainAmerica', 'thor', 'doctorStrange']

superheroes.forEach(function (a, b) {
  console.log(b, a);
})

superheroes.forEach((a, b) => {
  console.log(b, a);
})

//24. 배열 내장함수 - map
const list = [1, 2, 3, 4, 5, 6, 7, 8];

const squared = list.map(b => b * b);
console.log(squared);

const asdf = [{
    id: 1,
    txts: 'hello'
  },
  {
    id: 2,
    txts: 'bye'
  }
];

const qwer = asdf.map(asdf => asdf.txts);
console.log(qwer);

//24. 배열 내장함수 - indexOf
const index = superheroes.indexOf('thor');
console.log(index);

//24. 배열 내장함수 - findIndex
const todos = [{
    name: 1,
    task: '자바스크립트 입문',
    done: true
  },
  {
    name: 2,
    task: '함수 배우기',
    done: false
  },
  {
    name: 3,
    task: '객체와 배열 배우기',
    done: true
  },
  {
    name: 4,
    task: '배열 내장함수 배우기',
    done: false
  }
]

const fi = todos.findIndex(g => g.name === 2);
console.log(fi);

const find = todos.find(h => h.done === true);
console.log(find);

//25. 배열 내장함수 - filter
const taskUndone = todos.filter(l => !l.done);
console.log(taskUndone);

//26. 배열 내장함수 - splice, slice
const tens = [10, 20, 30, 40, 50, 60, 70, 80, 90];

const _index = tens.indexOf(30);
console.log(_index);

const spliced = tens.splice(_index, 2);
console.log(tens);
console.log(spliced);

const sliced = tens.slice(0, 2);
console.log(sliced);
console.log(tens);

//27. 배열 내장함수 shift, pop, unshift, push, concat, join
const shift = tens.shift();
console.log(shift);
console.log(tens);

const pop = tens.pop();
tens.pop();
console.log(pop);
console.log(tens);

tens.unshift(0);
console.log(tens);

tens.push(100);
console.log(tens);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const concated = arr1.concat(arr2);
console.log(concated);

console.log(concated.join());
console.log(concated.join('***'));

//28. 배열 내장함수 reduce