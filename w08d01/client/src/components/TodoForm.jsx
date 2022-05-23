import {useState} from 'react';

const TodoForm = (props) => {
  const [task, setTask] = useState('');

  const handleSubmit = (event) => {
    // prevent the page from refreshing
    event.preventDefault();

    // call the function passed down from the parent
    props.createTodo(task);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>New todo:</label>
        <input 
          value={task}
          onChange={(event) => setTask(event.target.value)}
        />
      </form>
      <button type="submit">Create!</button>
    </div>
  );
};

export default TodoForm;
