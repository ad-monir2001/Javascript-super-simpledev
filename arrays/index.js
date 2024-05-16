const todoList = [];
let valueEl = document.getElementById('inputedValue');

function addTodo() {
  const inputEl = document.querySelector('.js-name-input');
  const addValue = inputEl.value;
  todoList.push(addValue);

  valueEl.innerHTML = todoList;

  inputEl.value = '';
}
