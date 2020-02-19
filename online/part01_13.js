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
  actor: "robert douney junior",
  alias: "iron man"
};

console.log(ironMan);

function print1(hero) {
  const text = `${hero.alias}(${hero.name}) 역할을 맡은 배우는 ${hero.actor}입니다.`;
  console.log(text);
}

print1(ironMan);

//14. 객체 비구조화 할당
function print2({
  alias,
  name,
  actor
}) {
  const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor}입니다.`;
  console.log(text);
}

print2(ironMan);

const {
  name
} = ironMan;
console.log(name);


//15. 객체 안에 함수 넣기
const duck = {
  name: 'duckey',
  sound: 'quack quack',
  say: function () {
    console.log(this.sound);
  }
};

duck.say();

//16. getter & setter
const numbers = {
  a: 1,
  b: 2,
  get sum() {
    console.log('sum 함수가 실행됩니다');
    return this.a + this.b
  }
};

numbers.a = 5;
console.log(numbers);
console.log(numbers.sum);

const cat = {
  _sound: 'meow~',
  get sound() {
    console.log('소리를 조회합니다');
    return this._sound
  },
  set sound(value) {
    console.log('소리가 바뀝니다 ' + value)
    this._sound = value;
  }
}

console.log(cat.sound);
cat.sound = "야옹~"
console.log(cat.sound);