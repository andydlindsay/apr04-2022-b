const TodoListItem = (props) => {
  // console.log('props', props);

  return (
    <div className="todo-list-item">
      <h2>{ props.todo.completed ? '✅' : '🟩' } Task: {props.todo.task} ({props.todo.id})</h2>
      <button onClick={props.onClick}>Toggle Complete</button>
    </div>
  );
};

export default TodoListItem;
