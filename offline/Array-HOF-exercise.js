let todos = [{
  id: 3,
  content: 'HTML',
  completed: false
}, {
  id: 2,
  content: 'CSS',
  completed: true
}, {
  id: 1,
  content: 'JavaScript',
  completed: false
}];


// 1. html 생성
function render() {
  let html = '';
  todos.forEach(todo => {
    html += `<li id="${todo.id}">
  <label><input type="checkbox"${todo.completed ? ' checked' : ''}>${todo.content}</label>
</li>
`;
  });
  return html;
}

console.log(render());


// 2. 특정 프로퍼티 값 추출
function getValues(key) {
  return todos.map(todo => todo[key]);
}

console.log(getValues('id'));
console.log(getValues('content'));
console.log(getValues('completed'));


// 3. 프로퍼티 정렬
function sortBy(key) {
  todos.sort((a, b) => (a[key] > b[key] ? 1 : (a[key] < b[key] ? -1 : 0)));
  return todos;
}

console.log(sortBy('id'));
console.log(sortBy('content'));
console.log(sortBy('completed'));


// 4. 새로운 요소 추가
function addTodo1(newTodo) {
  todos = [newTodo, ...todos];
}

function addTodo2(newTodo) {
  todos = [newTodo].concat(todos);
}

addTodo1({
  id: 4,
  content: 'Test',
  completed: true
});
console.log(todos);

addTodo2({
  id: 5,
  content: 'React',
  completed: false
});
console.log(todos);


// 5. 특정 요소 삭제
function removeTodo(id) {
  todos = todos.filter(todo => todo.id !== id);
}

removeTodo(2);
console.log(todos);


// 6. 특정 요소의 프로퍼티 값 반전
function toggleCompletedById1(id) {
  return todos.map(todo => {
    if (todo.id === id) todo.completed = !todo.completed;
    return todo;
  });
}

function toggleCompletedById2(id) {
  todos = todos.map(todo => (todo.id === id ? Object.assign({}, todo, { completed: !todo.completed }) : todo));
}

function toggleCompletedById3(id) {
  todos = todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo));
}

toggleCompletedById1(3);
console.log(todos);
toggleCompletedById2(3);
console.log(todos);
toggleCompletedById3(3);
console.log(todos);


// 7. 모든 요소의 completd 프로퍼티 값을 true로 설정
function toggleCompletedAll1() {
  return todos.map(todo => Object.assign({}, todo, { completed: true }));
}

function toggleCompletedAll2() {
  return todos.map(todo => ({ ...todo, completed: true }));
}

console.log(toggleCompletedAll1());
console.log(toggleCompletedAll2());


// 8. completed 프로퍼티의 값이 true인 요소의 갯수 구하기
function countCompletedTodos() {
  return todos.filter(todo => todo.completed).length;
}

console.log(countCompletedTodos());


// 9. id 프로퍼티의 값 중에서 최대값 구하기
function getMaxId() {
  return todos.length ? Math.max(...todos.map(todo => todo.id)) : 0;
}

console.log(getMaxId());