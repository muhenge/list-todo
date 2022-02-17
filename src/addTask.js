import _ from 'lodash';
import Todos from './Todos';
import compare from './sort';

const addTasks = (todos) => {
  const listSorted = todos.sort(compare);
  const ul = document.getElementById('todo-lists');
  _.forEach(listSorted, (todo) => {
    const li = document.createElement('li');
    li.setAttribute('draggable', 'true');
    const check = document.createElement('input');
    check.setAttribute('type', 'checkbox');
    li.appendChild(check);
    li.innerHTML = `${todo.description}`;

    ul.appendChild(li);
  });
}

export default addTasks;
