// import _ from 'lodash';
import './style.css';
import Todos from './Todos';
import addTasks from './addTask'

import todoInput from './addTodo';

document.getElementById('task-input').addEventListener('keypress', todoInput,false);

window.onload = addTasks(JSON.parse(localStorage.getItem('todos')));

