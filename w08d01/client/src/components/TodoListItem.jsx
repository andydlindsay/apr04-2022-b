const TodoListItem = (props) => {
  console.log('props', props);

  return (
    <div>
      <h2>{ props.todo.completed ? '✅' : '🟩' } Task: {props.todo.task} ({props.todo.id})</h2>
    </div>
  );
};

export default TodoListItem;
