import { useState } from 'react';

function TodoForm({ addTodo }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '8px' }}>
      <input
        type="text"
        value={text}
        placeholder="Digite uma tarefa..."
        onChange={(e) => setText(e.target.value)}
        style={{ flex: 1, padding: '8px' }}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;
