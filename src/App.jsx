import React from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-light via-primary to-primary-dark">
      <div className="w-full max-w-lg mx-auto p-8 bg-white/90 rounded-3xl shadow-2xl border border-primary-light">
        <h1 className="text-4xl font-extrabold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-primary-dark to-primary drop-shadow-lg">
          Todo List
        </h1>
        <TodoInput />
        <TodoList />
      </div>
    </div>
  );
};

export default App;
