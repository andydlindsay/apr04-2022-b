import './App.css';
import TodoList from './components/TodoList';
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

  useEffect(() => {
    axios.get('/todos')
      .then((response) => {
        setTodos(response.data);
      });
  }, []);

  return (
    <div className="App">
      <h2>Todo List App</h2>
      <h2>Hello world!!!</h2>
      <TodoList todos={todos} />
    </div>
  );
};

export default App;
