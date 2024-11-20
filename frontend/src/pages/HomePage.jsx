import React, { useEffect, useState } from "react";
import { addTodo, deleteTodos, getTodos, toggleTodoCompletion, updateTodo } from "../services/todoService";
import TodoList from "../components/TodoList";

const HomePage = () => {

      const [todos, setTodos] = useState([]);
      const [text, setText] = useState("");
      const [selectedTodos, setSelectedTodos] = useState([]);

      const fetchTodos = async () => {
        const { data } = await getTodos();
        setTodos(data);
      };

      useEffect(() => {
        fetchTodos();
      }, []);

      const handleAddTodo = async () => {
        if (!text) return;
        await addTodo({ text });
        setText("");
        fetchTodos();
      };

      const handleUpdateTodo = async (id, updatedText) => {
        await updateTodo(id, { text: updatedText });
        fetchTodos();
      };

      const handleToggleComplete = async (id) => {
        await toggleTodoCompletion(id);
        fetchTodos();
      };

      const handleDeleteTodos = async () => {
        if (selectedTodos.length === 0) return;
        await deleteTodos(selectedTodos);
        setSelectedTodos([]);
        fetchTodos();
      };

      const handleSelect = (id, isSelected) => {
        setSelectedTodos((prev) =>
          isSelected ? [...prev, id] : prev.filter((todoId) => todoId !== id)
        );
      };

  return (
    <div className="max-w-lg mx-auto mt-10">
      <div className="flex items-center space-x-2">
        <input
          className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm
                    py-2 px-3 text-white focus:outline-none focus:ring-emerald-500 focus:border-emerald-500
                    "
          placeholder="Add a todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="bg-blue-500 hover:bg-blue-800 text-white px-4 rounded-lg h-9" onClick={handleAddTodo}>
          Add
        </button>
      </div>
      <TodoList
        todos={todos}
        onSelect={handleSelect}
        onUpdate={handleUpdateTodo}
        onToggleComplete={handleToggleComplete}
      />
      <button
        className="mt-4 bg-red-500 text-white px-4 rounded-md h-10 hover:bg-red-700"
        onClick={handleDeleteTodos}
      >
        Delete Selected
      </button>
    </div>
  );
};

export default HomePage;
