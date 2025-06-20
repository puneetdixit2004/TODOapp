const TodoItem = ({ todo }) => {
  const { toggleTodo, deleteTodo } = useContext(TodoContext);

  return (
    <div
      className={`flex items-center justify-between bg-white/80 shadow-md rounded-lg px-5 py-3 border-l-4 transition-all duration-300 ${
        todo.completed ? 'border-primary-dark' : 'border-primary'
      } hover:scale-105`}
    >
      <div
        onClick={() => toggleTodo(todo.id)}
        className={`cursor-pointer select-none text-lg font-medium transition-colors duration-200 ${
          todo.completed
            ? 'line-through text-gray-400'
            : 'text-gray-800 hover:text-primary-dark'
        }`}
        title="Toggle complete"
      >
        {todo.text}
      </div>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="text-red-500 hover:text-white hover:bg-red-500 rounded-full p-2 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-300"
        title="Delete todo"
      >
        ❌
      </button>
    </div>
  );
};

export default TodoItem;
