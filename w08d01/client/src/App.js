import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import axios from 'axios';
import {useState, useEffect} from 'react';

// const todos = [
//   {
//     id: 'fgh',
//     task: 'pickup groceries',
//     completed: true
//   },
//   {
//     id: 'ijk',
//     task: 'wash the dog',
//     completed: false
//   },
// ];

const App = () => {
  const [todos, setTodos] = useState([]);

  const createTodo = (task) => {
    axios.post('/todos', { task })
      .then(() => {
        // retrieve the todos and load them into state so that we can see the change
        axios.get('/todos')
          .then((response) => {
            setTodos(response.data);
          });
      });
  };

  const toggleComplete = (todoId) => {
    // find the todo based off the provided todoId
    const todo = todos.find((t) => t.id === todoId);

    // make a PATCH request with the new `completed` value
    axios.patch(`/todos/${todoId}`, { completed: !todo.completed })
      .then(() => {
        // retrieve the todos and load them into state so that we can see the change
        axios.get('/todos')
          .then((response) => {
            setTodos(response.data);
          });
      });
  };

  useEffect(() => {
    axios.get('/todos')
      .then((response) => {
        setTodos(response.data);
      });
  }, []);

  return (
    <div className="App">
      <h2>Todo List App</h2>

      <TodoForm 
        createTodo={createTodo}
      />

      <TodoList
        todos={todos} 
        toggleComplete={toggleComplete}     
      />   
    </div>
  );
};

export default App;
