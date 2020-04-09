// state
let todos = [];
let nav = 'all';

// DOMs
const $todos = document.querySelector('.todos');
const $nav = document.querySelector('.nav');
const $inputTodo = document.querySelector('.input-todo');
const $clearBtn = document.querySelector('.clear-completed > .btn');
const $activeTodos = document.querySelector('.active-todos');
const $completedTodos = document.querySelector('.completed-todos');
const $completeAll = document.querySelector('.complete-all > .checkbox');

const ajax = (() => {
  const request = (method, url, callback, payload) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.send(JSON.stringify(payload));

    xhr.onload = () => {
      if (xhr.status === 200 || xhr.status === 201) {
        callback(JSON.parse(xhr.response));
      } else {
        console.error(`${xhr.status} ${xhr.statusText}`);
      }
    };
  };

  return {
    get(url, callback) {
      request('GET', url, callback);
    },
    post(url, payload, callback) {
      request('POST', url, callback, payload);
    },
    patch(url, payload, callback) {
      request('PATCH', url, callback, payload);
    },
    delete(url, callback) {
      request('DELETE', url, callback);
    },
  };
})();

const getActiveTodos = () => todos.filter(({ completed }) => !completed);
const getCompletedTodos = () => todos.filter(({ completed }) => completed);

const render = () => {
  let html = '';
  const _todos = nav === 'active' ? getActiveTodos() : (nav === 'completed' ? getCompletedTodos() : todos);

  _todos.forEach(({ id, content, completed}) => {
    html += `<li id="${id}" class="todo-item">
        <input id="ck-${id}" class="checkbox" type="checkbox"${completed ? ' checked' : ''}>
        <label for="ck-${id}">${content}</label>
        <i class="remove-todo far fa-times-circle"></i>
      </li>`;

    $activeTodos.textContent = getActiveTodos().length;
    $completedTodos.textContent = getCompletedTodos().length;
    $todos.innerHTML = html;
  });
};

const getTodos = () => {
  ajax.get('/todos', data => {
    todos = data;
    render();
  });
};

const generateId = () => (todos.length ? Math.max(...todos.map(({ id }) => id)) + 1 : 1);

const changeNav = target => {
  [...$nav.children].forEach(child => child.classList.toggle('active', child === target));
  nav = target.id;
  render();
};

// event handlers
window.onload = getTodos;

$nav.onclick = ({ target }) => {
  if (!target.matches('.nav > li') || target.classList.contains('active')) return;
  changeNav(target);
};

$inputTodo.onkeyup = e => {
  const content = e.target.value.trim();
  if (e.keyCode !== 13 || content === '') return;

  ajax.post('/todos', { id: generateId(), content, completed: false }, data => {
    todos = [data, ...todos];
    render();
  });

  e.target.value = '';
};

$todos.onclick = ({ target }) => {
  const id = target.parentNode.id;
  if (!target.matches('.todos > li > i.remove-todo')) return;

  ajax.delete(`/todos/${id}`, () => {
    todos = todos.filter(todo => todo.id !== +id);
    render();
  });
};

$todos.onchange = ({ target }) => {
  const id = target.parentNode.id;
  const completed = target.checked;

  ajax.patch(`/todos/${id}`, { completed }, data => {
    todos = todos.map(todo => (todo.id === +id ? data : todo));
    render();
  });
};

$completeAll.onchange = () => {
  const completed = $completedTodos.checked;
  // todos.forEach(todo => ajax.patch(`/todo/${todo.id}`, { completed }, data => {
  //   todos = todos.map(td => (td.id === todo.id ? data : td));
  // }));
};

$clearBtn.onclick = () => {
  // todos.forEach(todo => ajax.delete(`/todo/${todo.id}`, () => {
  //   todos = todos.filter(td => td.id !== todo.id);
  // }));
};