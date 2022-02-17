import Todos from './Todos';
import addTasks from './addTask';

const todos = [];
const todoInput = (e) => {
  e.preventDefault();
  if(e.key === 'Enter') {
    let index;
    
    if(todos.length === 0) {
      index = 1;
    }
    else {
      index = todos[todos.length - 1].index + 1;
    }
    const todo = new Todos(index, e.target.value, false);
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
    addTasks(todos);
    console.log(todos);
  }
}

export default todoInput;