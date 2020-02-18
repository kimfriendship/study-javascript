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

//03. 단축 평가 논리 계산법