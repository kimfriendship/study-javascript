const promiseGet = url => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();

    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(JSON.parse(xhr.response));
      } else {
        reject(new Error(`${xhr.status}`));
      }
    };
  });
};

promiseGet('https://jsonplaceholder.typicode.com/todos/1')
  .then(todo => console.log(todo))
  .catch(err => console.error(err))
  .finally(() => console.log('END'));
