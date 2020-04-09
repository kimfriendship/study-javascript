// state
let todos = [];
let nav = 'all';

// DOMs
const $inputTodo = document.querySelector('.input-todo');
const $todos = document.querySelector('.todos');
const $nav = document.querySelector('.nav');
const $completeAll = document.querySelector('.complete-all > .checkbox');
const $clearBtn = document.querySelector('.clear-completed > .btn');
const $activeTodos = document.querySelector('.active-todos');
const $completedTodos = document.querySelector('.completed-todos');

const getCompletedTodos = () => todos.filter(todo => todo.completed);
const getActiveTodos = () => todos.filter(todo => !todo.completed);

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
    post(url, callback, payload) {
      request('POST', url, callback, payload);
    },
    patch(url, callback, payload) {
      request('PATCH', url, callback, payload);
    },
    delete(url, callback) {
      request('DELETE', url, callback);
    },
  };
})();

const render = () => {
  let html = '';
  const _todos = nav === 'active' ? getActiveTodos() : (nav === 'completed' ? getCompletedTodos() : todos);

  _todos.forEach(({ id, content, completed }) => {
    html += `<li id="${id}" class="todo-item">
        <input id="ck-${id}" class="checkbox" type="checkbox"${completed ? ' checked' : ''}>
        <label for="ck-${id}">${content}</label>
        <i class="remove-todo far fa-times-circle"></i>
      </li>`;
  });


  $activeTodos.textContent = getActiveTodos().length;
  $completedTodos.textContent = getCompletedTodos().length;
  $todos.innerHTML = html;
};

const getTodos = () => {
  ajax.get('/todos', data => {
    todos = data.sort((todo1, todo2) => todo2.id - todo1.id);
    render();
  });
};

const generateId = () => (todos.length ? Math.max(...todos.map(({ id }) => id)) + 1 : 1);

const changeNav = target => {
  nav = target.id;

  render();
};

// event handlers
window.onload = getTodos;

$nav.onclick = ({ target }) => {
  if (!target.matches('.nav > li') || target.classList.contains('active')) return;
  [...$nav.children].forEach(child => child.classList.toggle('active', child === target));

  changeNav(target);
};

$inputTodo.onkeyup = e => {
  const content = e.target.value.trim();
  if (e.keyCode !== 13 || content === '') return;

  ajax.post('/todos', data => {
    todos = [data, ...todos];
    render();
  }, { id: generateId(), content, completed: false });

  e.target.value = '';
};

$todos.onclick = e => {
  const id = e.target.parentNode.id;
  if (!e.target.matches('.todos > li > i.remove-todo')) return;

  ajax.delete(`/todos/${id}`, () => {
    todos = todos.filter(todo => todo.id !== +id);
    render();
  });
};

$todos.onchange = e => {
  const id = e.target.parentNode.id;
  const [{ completed }] = todos.filter(todo => todo.id === +id);

  ajax.patch(`/todos/${id}`, data => {
    todos = todos.map(todo => (todo.id === +id ? { ...todo, ...data } : todo));
    render();
  }, { completed: !completed });
};

$clearBtn.onclick = () => {
  const completedIds = getCompletedTodos().map(todo => todo.id);

  // completedIds.forEach(id => ajax.delete(`/todos/${id}`, () => {
    // todos = todos.filter(todo => todo.id !== id);
    // render();
  // }));
};

$completeAll.onchange = () => {
  // todos.forEach(({ id }) => ajax.patch(`/todos/${id}`, data => {
  //   todos = todos.map(todo => ({ ...todo, ...data }));
  //   render();
  // }, { completed: true }));
};
