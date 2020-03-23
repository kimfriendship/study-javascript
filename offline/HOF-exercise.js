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
  content: 'Javascript',
  completed: false
}];

// 1. html 생성
function render() {
  let html = '';
  todos.forEach(todo => {
    html += `<li id="${todo.id}">
  <label><input type="checkbox"${todo.completed ? ' checked' : ''}>${todo.content}</label>
</li>
`
  })
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

// 4. 새로운 요소 추가
function addTodo(newTodo) {
  todos = [todos, ...[newTodo]].flat();
}

addTodo({
  id: 4,
  content: 'Test',
  completed: false
});
console.log(todos);

// 5. 특정 요소 삭제
function removeTodo(id) {
  todos = todos.filter(todo => todo.id !== id);
}

removeTodo(2);
console.log(todos);