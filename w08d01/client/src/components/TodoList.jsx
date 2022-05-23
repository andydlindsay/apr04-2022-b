import TodoListItem from "./TodoListItem";

const TodoList = (props) => {
  // console.log('props', props);

  const mappedTodos = props.todos.map((todo) => {
    return (
      <TodoListItem
        key={todo.id}
        todo={todo}
        onClick={() => props.toggleComplete(todo.id)}
      />);
  });

  return (
    <div>
      <h2>TodoList</h2>
      { mappedTodos }
    </div>
  );
};

export default TodoList;
