let todos = [];

const $todos = document.querySelector('.todos');
const $inputTodo = document.querySelector('.input-todo');

const ajax = (() => {
  const changeState = (method, url, callback, payload) => {
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
      changeState('GET', url, callback);
    },
    post(url, callback, payload) {
      changeState('POST', url, callback, payload);
    },
    delete(url, callback) {
      changeState('DELETE', url, callback);
    },
    patch(url, callback, payload) {
      changeState('PATCH', url, callback, payload);
    },
  };
})();

const render = () => {
  let html = '';

  todos = todos.sort((todo1, todo2) => todo2.id - todo1.id);

  todos.forEach(({ id, content, completed }) => {
    html += `<li id="${id}">
        <input type="checkbox" ${completed ? 'checked' : ''}>
        <span>${content}</span>
        <button class="deleteBtn">X</button>
      </li>`;
  });
  $todos.innerHTML = html;
};

const getTodos = () => {
  ajax.get('/todos', data => {
    todos = data;
    render();
  });
};

const generateId = () => (todos.length ? Math.max(...todos.map(({ id }) => id)) + 1 : 1);

window.onload = getTodos;

$inputTodo.onkeyup = e => {
  const content = e.target.value;
  if (e.keyCode !== 13 || content.trim() === '') return;

  ajax.post('/todos', data => {
    todos = [data, ...todos];
    render();
  }, { id: generateId(), content, completed: false });

  e.target.value = '';
};

$todos.onclick = e => {
  if (!e.target.matches('.todos > li > button.deleteBtn')) return;
  const id = e.target.parentNode.id;

  ajax.delete(`/todos/${id}`, () => {
    todos = todos.filter(todo => todo.id !== +id);
    render();
  });
};

$todos.onchange = e => {
  const id = e.target.parentNode.id;
  let [changeTodo] = todos.filter(todo => todo.id === +id);

  ajax.patch(`/todos/${id}`, data => {
    changeTodo = { ...changeTodo, ...data };
    todos = [changeTodo, ...todos.filter(todo => todo.id !== +id)];
    render();
  }, { completed: !changeTodo.completed });
};
