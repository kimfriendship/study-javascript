//13. 객체
const dog = {
  name: "댕댕이",
  age: 2,
  cute: true
};

console.log(dog);
console.log(dog.name);
console.log(dog.age);

const ironMan = {
  name: "tony stark",
  actor: "rober douney junior",
  alias: "iron man"
};

console.log(ironMan);

function print1(hero) {
  const text = `${hero.alias}(${hero.name}) 역할을 맡은 배우는 ${
    hero.actor
    
  }입니다.`;
  console.log(text);
}

print1(ironMan);

//14. 객체 비구조화 할당
function print2({ alias, name, actor }) {
  const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor}입니다.`;
  console.log(text);
}

print2(ironMan);

const { name } = ironMan;
console.log(name);
