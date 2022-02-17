// import _ from 'lodash';
import './style.css';
import Todos from './Todos';

import todoInput from './addTodo';

document.getElementById('task-input').addEventListener('keypress', todoInput);