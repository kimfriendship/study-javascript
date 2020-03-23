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

// 5. 특정 요소 삭제
function removeTodo(id) {
  todos = todos.filter(todo => todo.id !== id);
}

removeTodo(2);
console.log(todos);