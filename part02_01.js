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