//23. 배열함수 - for each
const superheroes = ['ironMan', 'captainAmerica', 'thor', 'doctorStrange']

superheroes.forEach(function (a, b) {
  console.log(b, a);
})

superheroes.forEach((a, b) => {
  console.log(b, a);
})