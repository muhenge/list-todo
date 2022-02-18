import Todos from './Todos';
import addTasks from './addTask';

const todos = JSON.parse(localStorage.getItem('todos'));

const todoInput = (e) => {
  
  if(e.key === 'Enter') {
    e.preventDefault();
    let index;
    if(todos.length === 0) {
      index = 1;
    }
    else {
      index = todos[todos.length - 1].id + 1;
    }
    const todo = new Todos(index, e.target.value, false);
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
    addTasks(JSON.parse(localStorage.getItem('todos')));
  }
 
  
}

export default todoInput;