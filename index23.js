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
  }
]

const fi = todos.findIndex(g => g.name === 2);
console.log(fi);

const find = todos.find(h => h.done === true);
console.log(find);