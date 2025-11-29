import TodoItem from './TodoItem';

function TodoList({ todos, deleteTodo, toggleTodo, updateTodo }) {
  return (
    <ul style={{ padding: 0, marginTop: '20px', listStyle: 'none' }}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
          updateTodo={updateTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
