let todos = [{
  id: 1,
  content: 'HTML',
  completed: false
}, {
  id: 2,
  content: 'CSS',
  completed: false
}, {
  id: 3,
  content: 'JS',
  completed: false
}];

window.onload = e => {
  const sortedTodos = todos.sort((a, b) => (a['id'] > b['id'] ? 1 : (a['id'] < b['id'] ? -1 : 0))).reverse();

  let html = '';
  sortedTodos.forEach(todo => html += `<li id="${todo.id}"><input type="checkbox"${todo.completed ? ` checked` : ''}>${todo.content}</li>`);

  document.querySelector('.body').innerHTML = `<ul>${html}</ul>`;
};