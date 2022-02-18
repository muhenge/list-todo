import _ from 'lodash';
import Todos from './Todos';
import compare from './sort';
import removeTask from './remove';
const addTasks = (todos) => {
  const listSorted = todos.sort(compare);
  const ul = document.getElementById('todo-lists');
  const li = document.createElement('li');
  const check = document.createElement('input');
  li.setAttribute('draggable', 'true');
  check.setAttribute('type', 'checkbox');
  li.appendChild(check);
  _.forEach(listSorted, (todo) => {
    li.innerHTML = `<input type="checkbox" id="${todo.id}"></input> ${todo.description} <button id="${todo.id}" onclick="removeTask(${todo.id})">X</button>`;
    ul.appendChild(li);
  });
}

export default addTasks;
