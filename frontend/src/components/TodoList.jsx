import React from 'react'
import TodoItem from './TodoItem';

const TodoList = ({ todos, onSelect, onUpdate, onToggleComplete }) => {
  return (
    <div className="mt-4 space-y-2">
      {todos.map((todo) => (
        <TodoItem
          key={todo._id}
          todo={todo}
          onSelect={onSelect}
          onUpdate={onUpdate}
          onToggleComplete={onToggleComplete}
        />
      ))}
    </div>
  );
};

export default TodoList