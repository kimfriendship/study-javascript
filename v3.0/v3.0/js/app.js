// State
let todos = [];
// let navState = 'all';

const $nav = document.querySelector('.nav');
const $active = document.getElementById('active');
const $completed = document.getElementById('completed');
const $todos = document.querySelector('.todos');
const $inputTodo = document.querySelector('.input-todo');
const $leftItems = document.querySelector('.active-todos');
const $doneItems = document.querySelector('.completed-todos');
const $clearBtn = document.querySelector('.clear-completed > .btn');
const $completeAll = document.getElementById('ck-complete-all');

const render = () => {
  let html = '';
  let todoState = '';
  const activeTodos = todos.filter(todo => !todo.completed);
  const completedTodos = todos.filter(todo => todo.completed);

  todoState = $active.classList.contains('active') ? activeTodos : ($completed.classList.contains('active') ? completedTodos : todos);

  todoState.sort((todo1, todo2) => (todo1['id'] < todo2['id'] ? 1 : (todo1['id'] > todo2['id'] ? -1 : 0)));

  todoState.forEach(todo => {
    html += `<li id="${todo.id}" class="todo-item">
        <input id="ck-${todo.id}" class="checkbox" type="checkbox"${todo.completed ? ' checked' : ''}>
        <label for="ck-${todo.id}">${todo.content}</label>
        <i class="remove-todo far fa-times-circle"></i>
      </li>`;
  });

  $leftItems.textContent = `${todos.filter(todo => !todo.completed).length}`;
  $doneItems.textContent = `${todos.length - $leftItems.textContent}`;
  $todos.innerHTML = html;
};

const getTodos = () => {
  todos = [
{ id: 2, content: 'CSS', completed: false },
{ id: 1, content: 'HTML', completed: true },
{ id: 3, content: 'JS', completed: false },
];

  render();
};

const generateId = () => {
  return todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
};

const removeTodo = id => {
  todos = todos.filter(todo => todo.id !== +id);

  render(todos);
};

window.onload = () => getTodos();

$nav.onclick = e => {
  if (!e.target.matches('.nav > li:not(.active)')) return;
  [...$nav.children].forEach(menu => menu.classList.toggle('active', menu.id === e.target.id));

  render();
};

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

$todos.onchange = e => {
  const id = e.target.parentNode.id;

  todos = todos.map(todo => todo.id === +id ? { ...todo, completed: !todo.completed } : todo);

  render();
};

$todos.onclick = e => {
  if (!e.target.matches('.todos > li > i.remove-todo')) return;
  removeTodo(e.target.parentNode.id);
};

$completeAll.onchange = e => {
  todos = e.target.checked ? todos.map(todo => ({
    ...todo,
    completed: true
  })) : todos.map(todo => ({
    ...todo,
    completed: false
  }));

  render();
};

$clearBtn.onclick = e => {
  const completed = todos.filter(todo => todo.completed).map(completedTodo => completedTodo.id)

  completed.forEach(id => removeTodo(id));
};
