import { useState } from 'react';

function TodoItem({ todo, deleteTodo, toggleTodo, updateTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const saveEdit = () => {
    if (!newText.trim()) return;
    updateTodo(todo.id, newText);
    setIsEditing(false);
  };

  return (
    <li
      style={{
        marginBottom: '12px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
      }}
    >
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => toggleTodo(todo.id)}
      />

      {!isEditing ? (
        <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
          {todo.text}
        </span>
      ) : (
        <input value={newText} onChange={(e) => setNewText(e.target.value)} />
      )}

      {!isEditing ? (
        <button onClick={() => setIsEditing(true)}>Editar</button>
      ) : (
        <button onClick={saveEdit}>Salvar</button>
      )}

      <button onClick={() => deleteTodo(todo.id)} style={{ color: 'red' }}>
        X
      </button>
    </li>
  );
}

export default TodoItem;
