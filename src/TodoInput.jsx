import { useState, useContext } from 'react';


const TodoInput = () => {
  const [task, setTask] = useState('');
  const { addTodo } = useContext(TodoContext);

  const handleAdd = () => {
    if (task.trim() === '') return;
    addTodo(task);
    setTask('');
  };

  return (
    <div className="flex items-center gap-3 mb-6 bg-white/80 p-4 rounded-xl shadow-md border border-primary-light">
      <input
        type="text"
        placeholder="Enter a task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="flex-grow p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-lg transition-all duration-200 bg-primary-light/40 placeholder-gray-400"
      />
      <button
        onClick={handleAdd}
        className="bg-gradient-to-r from-primary to-primary-dark text-white px-6 py-2 rounded-lg font-semibold shadow hover:from-primary-dark hover:to-primary transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary"
      >
        Add
      </button>
    </div>
  );
};

export default TodoInput;
