import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos }) => {
  return (
    <ul className="space-y-3 bg-gradient-to-b from-primary-light to-primary p-4 rounded-xl shadow-lg border border-primary">
      {todos.length === 0 ? (
        <li className="text-gray-400 italic text-center py-4">No todos yet!</li>
      ) : (
        todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      )}
    </ul>
  );
};

export default TodoList;
