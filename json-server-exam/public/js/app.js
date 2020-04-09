let todos = [];

const $inputTodo = document.querySelector('.input-todo');
const $todos = document.querySelector('.todos');

const axios = (() => {
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

const render = () => {
  let html = '';

  todos.forEach(({ id, content, completed }) => {
    html += `<li id="${id}">
        <input type="checkbox"${completed ? ' checked' : ''}  >
        <span>${content}</span>
        <button>x</button>
      </li>`;
  });

  $todos.innerHTML = html;
};

const getTodos = () => {
  axios.get('/todos', data => {
    todos = data.sort((todo1, todo2) => (todo2.id - todo1.id));
    render();
  });
};

const generateId = () => (todos.length ? Math.max(...todos.map(({ id }) => id)) + 1 : 1);

// event handlers
window.onload = getTodos;

$inputTodo.onkeyup = e => {
  const content = e.target.value.trim();
  if (e.keyCode !== 13 || content === '') return;

  axios.post('/todos', { id: generateId(), content, completed: false }, data => {
    todos = [data, ...todos];
    render();
  });

  e.target.value = '';
};

$todos.onchange = e => {
  const id = e.target.parentNode.id;
  const completed = e.target.checked;

  axios.patch(`/todos/${id}`, { completed }, data => {
    todos = todos.map(todo => (todo.id === +id ? data : todo));
    render();
  });
};

$todos.onclick = e => {
  const id = e.target.parentNode.id;
  if (!e.target.matches('.todos > li > button')) return;

  axios.delete(`/todos/${id}`, () => {
    todos = todos.filter((todo => todo.id !== +id));
    render();
  });
};