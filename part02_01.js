//01.  삼항연산자 - 단일
const array = ['fds'];

let text = '';
if (array.length === 0) {
  text = "배열이 비어있습니다"
} else {
  text = "배열이 비어있지 않습니다."
}

console.log(text);


let text1 = array.length === 0 ?
  '배열이 비어있습니다' :
  '배열이 비어있지 않습니다.'

console.log(text1);

//01. 삼항연산자 - 중첩
const condition1 = false;
const condition2 = false;

const value = condition1 ? '와우!' : condition2 ? 'blabla' : 'foo'

console.log(value);

//02. falsy
console.log(!undefined)
console.log(!null)
console.log(!0)
console.log(!'')
console.log(!NaN)
console.log(!false)

const value1 = null;

if (value1) {
  console.log('value가 truthy 하네요')
}

const falsy = !!value1
console.log(falsy)

//02. truthy
console.log(!3)
console.log(!'hello')
console.log(!['array'])
console.log(!{})

const value2 = {
  a: 1
};

if (value2) {
  console.log('value가 truthy 하네요')
};

const truthy = value2 ? true : false;
console.log(truthy);

//03. 단축 평가 논리 계산법 - &&
console.log(undefined && 'hello')
console.log(null && 'bye')
console.log(!0 && 1003)
console.log('' && 'wooey')
console.log('hello' && !NaN)
console.log([] && !false)


//03. 단축 평가 논리 계산법 - && 응용1
const bird = {
  name: 'birdy'
}

function getName(animal) {
  return animal && animal.name;
}

const name = getName(bird)
console.log(name);

//03. 단축 평가 논리 계산법 - && 응용2
const object = null;
const name1 = object && object.name; //error가 나지 않음
console.log(name1);


//03. 단축 평가 논리 계산법 - ||
console.log(undefined || 'hello')
console.log(null || 'bye')
console.log(!0 || 1003)
console.log('' || 'wooey')
console.log('hello' || !NaN)
console.log([] || !false)

//03. 단축 평가 논리 계산법 - || 응용
const coconut = {};

function nameget(b) {
  const c = b && b.c;
  return c || '이름이 없는 동물입니다.'
}

const c = nameget(coconut)
console.log(c);

//04. 함수의 기본 파라미터
const calculateCircleArea = (r = 1) => Math.PI * r * r;

const area = calculateCircleArea(); //파라미터가 없을 때 기본값으로 출력
console.log(area);
const area1 = calculateCircleArea(5);
console.log(area1);

//05. 조건문 스마트하게 쓰기
function asdfAnimal(asdf) {
  const animals = ['cat', 'dog', 'elephant', 'racoon'];
  return animals.includes(asdf);
}

console.log(asdfAnimal('cat'));
console.log(asdfAnimal('lizard'));

function getSound(ani) {
  const sounds = {
    dog: 'barkbark',
    cat: 'meow',
    duck: 'quack'
  };
  return sounds[ani] || '...?'
}

console.log(getSound('cat'))
console.log(getSound('mouse'))

//06. 비구조화 할당