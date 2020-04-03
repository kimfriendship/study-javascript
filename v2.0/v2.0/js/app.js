// State
let todos = [];
const $todos = document.querySelector('.todos');
const $inputTodo = document.querySelector('.input-todo');
const $completeAll = document.querySelector('.complete-all');
const $completedTodo = document.querySelector('.clear-completed > .btn');
const $activeTodo = document.querySelector('.active-todos');

const render = () => {
  let html = '';
  let completedIds = todos.filter(todo => todo.completed).map(completed => completed.id);

  todos.sort((todo1, todo2) => (todo1['id'] < todo2['id'] ? 1 : (todo1['id'] > todo2['id'] ? -1 : 0)));

  todos.forEach(todo => {
    html += `<li id="${todo.id}" class="todo-item">
        <input id="input${todo.id}" class="checkbox" type="checkbox"${todo.completed ? ' checked' : ''}>
        <label for="input${todo.id}">${todo.content}</label>
        <i class="remove-todo far fa-times-circle"></i>
      </li>`;
  });

  $completedTodo.firstElementChild.textContent = `${completedIds.length}`;
  $activeTodo.textContent = `${todos.length - completedIds.length}`;
  $todos.innerHTML = html;
};

const generateId = () => {
  return todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 0;
};

const removeTodo = id => {
  todos = todos.filter(todo => todo.id !== +id);

  render();
};

window.onload = render;

$inputTodo.onkeyup = e => {
  const content = $inputTodo.value;
  if (e.keyCode !== 13 || content.trim() === '') return;

  todos = [...todos, {
    id: generateId(),
    content,
    completed: false
  }];

  render();

  $inputTodo.value = '';
};

$todos.onclick = e => {
  if (!e.target.matches('.todos > li > i.remove-todo')) return;
  removeTodo(e.target.parentNode.id);
};

$todos.onchange = e => {
  let id = e.target.parentNode.id;
  todos = todos.map(todo => (todo.id === +id ? {
    ...todo,
    completed: !todo.completed
  } : todo));

  render();
};

$completeAll.onchange = e => {
  if (!e.target.matches('.complete-all > input.checkbox')) return;
  todos = e.target.checked ? todos.map(todo => ({
    ...todo,
    completed: true
  })) : todos.map(todo => ({
    ...todo,
    completed: false
  }));

  render();
};

$completedTodo.onclick = e => todos.filter(todo => todo.completed).map(completed => completed.id).forEach(id => removeTodo(id));