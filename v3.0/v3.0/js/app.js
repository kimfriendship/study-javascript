// State
let todos = [];
let activeTodos = [];
let completedTodos = [];

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
  activeTodos = todos.filter(todo => !todo.completed);
  completedTodos = todos.filter(todo => todo.completed);

  if ($active.classList.contains('active')) {
    todoState = activeTodos;
  } else if ($completed.classList.contains('active')) {
    todoState = completedTodos;
  } else {
    todoState = todos;
  };

  todoState.sort((todo1, todo2) => (todo1['id'] < todo2['id'] ? 1 : (todo1['id'] > todo2['id'] ? -1 : 0)))

  todoState.forEach(todo => {
    html += `<li id="${todo.id}" class="todo-item">
        <input id="ck-${todo.id}" class="checkbox" type="checkbox"${todo.completed ? ' checked' : ''}>
        <label for="ck-${todo.id}">${todo.content}</label>
        <i class="remove-todo far fa-times-circle"></i>
      </li>`;
  });

  $leftItems.textContent = `${todos.filter(todo => !todo.completed).length}`;
  $doneItems.textContent = `${todos.length - $leftItems.textContent}`
  $todos.innerHTML = html;
};

const generateId = () => {
  return todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
};

const removeTodo = id => {
  todos = todos.filter(todo => todo.id !== +id);

  render(todos);
};

window.onload = () => render();

$nav.onclick = e => {
  [...$nav.children].forEach(menu => {
    if (menu.id === e.target.id) menu.classList.toggle('active', true);
    else menu.classList.toggle('active', false);
  });

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
  let id = e.target.parentNode.id;

  todos = todos.map(todo => {
    return todo.id === +id ? {
      ...todo,
      completed: !todo.completed
    } : todo
  });

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
  let completed = todos.filter(todo => todo.completed).map(completedTodo => completedTodo.id)

  completed.forEach(id => removeTodo(id));
};