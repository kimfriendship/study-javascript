//09.함수
function add(a, b) {
  return a + b;
}

const sum = add(1, 2);
console.log(sum);

function hello1(name) {
  console.log("Hello, " + name + "!");
}

//10. Template literal - ES6로 문자열 간편하게 조합하기
hello1("Woojung");

function hello2(name) {
  return `Hello, ${name}!`;
}

const result = hello2("Woojung");
console.log(result);

//11. practice function
function getGrade(score) {
  if (score === 100) {
    return "A+";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B+";
  } else {
    return "F";
  }
}

const grade = getGrade(67);
console.log(grade);

//12. 화살표 함수
const abc = (a, b) => a + b;

const def = abc(1, 2);
console.log(def);
