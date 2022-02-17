import _ from 'lodash';
import Todos from './Todos';
import compare from './sort';


const addTasks = (todos) => {
  const listSorted = todos.sort(compare);
  const ul = document.getElementById('todo-lists');
  const li = document.createElement('li');
  const check = document.createElement('input');
  _.forEach(listSorted, (todo) => {
   
    li.setAttribute('draggable', 'true');
   
    check.setAttribute('type', 'checkbox');
    li.appendChild(check);
    li.innerHTML = `${todo.description}`;
    ul.appendChild(li);
  });
}

export default addTasks;
