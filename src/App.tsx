import { useEffect, useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all'); // 👈 filtro

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('todos'));
    if (saved) setTodos(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, done: false }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  const updateTodo = (id, newText) => {
    setTodos(todos.map((t) => (t.id === id ? { ...t, text: newText } : t)));
  };

  // Aplica o filtro antes de enviar para a lista
  const filteredTodos = todos.filter((todo) => {
    if (filter === 'done') return todo.done;
    if (filter === 'pending') return !todo.done;
    return true; // all
  });

  return (
    <div style={{ maxWidth: '400px', margin: '40px auto' }}>
      <h1>To-Do List</h1>

      {/* Botões de filtro */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
        <button
          onClick={() => setFilter('all')}
          style={{ fontWeight: filter === 'all' ? 'bold' : 'normal' }}
        >
          Todos
        </button>

        <button
          onClick={() => setFilter('done')}
          style={{ fontWeight: filter === 'done' ? 'bold' : 'normal' }}
        >
          Feitos
        </button>

        <button
          onClick={() => setFilter('pending')}
          style={{ fontWeight: filter === 'pending' ? 'bold' : 'normal' }}
        >
          Pendentes
        </button>
      </div>

      <TodoForm addTodo={addTodo} />

      <TodoList
        todos={filteredTodos}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
}

export default App;
