import _ from 'lodash';
import './style.css';
import compare from './sort';

const todos = [
  {
    index: 1,
    description: 'Learn JavaScript',
    completed: true,
  },
  {
    index: 2,
    description: 'Learn React',
    completed: false,
  },
  {
    index: 3,
    description: 'Learn Redux',
    completed: false,
  },
];

const listSorted = todos.sort(compare);
const ul = document.getElementById('todo-lists');

window.onload = () => {
  _.forEach(listSorted, (todo) => {
    const li = document.createElement('li');
    li.setAttribute('draggable', 'true');
    const check = document.createElement('input');
    check.setAttribute('type', 'checkbox');
    li.appendChild(check);
    li.innerHTML = `${todo.description}`;

    ul.appendChild(li);
  });
};
