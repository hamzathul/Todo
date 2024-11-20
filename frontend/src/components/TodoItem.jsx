import { useState } from "react";

const TodoItem = ({ todo, onSelect, onUpdate, onToggleComplete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedText, setUpdatedText] = useState(todo.text);

  const handleUpdate = () => {
    onUpdate(todo._id, updatedText);
    setIsEditing(false);
  };

  return (
    <div
      className={`flex items-center justify-between border border-green-300 hover:scale-105 rounded-xl p-2 ${
        todo.isCompleted ? "bg-green-600 line-through" : ""
      }`}
    >
      <input
        type="checkbox"
        onChange={(e) => onSelect(todo._id, e.target.checked)}
      />
      {isEditing ? (
        <input
          className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm
                    py-2 px-3 text-white focus:outline-none focus:ring-emerald-500 focus:border-emerald-500
                    "
          value={updatedText}
          onChange={(e) => setUpdatedText(e.target.value)}
        />
      ) : (
        <span className="overflow-hidden text-ellipsis whitespace-nowrap">
          {todo.text}
        </span>
      )}
      <div className="flex space-x-2">
        <button
          className="text-yellow-500"
          onClick={() => onToggleComplete(todo._id)}
        >
          {todo.isCompleted ? "Undo" : "Complete"}
        </button>
        {isEditing ? (
          <button className="text-green-500" onClick={handleUpdate}>
            Save
          </button>
        ) : (
          <button className="text-blue-500" onClick={() => setIsEditing(true)}>
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default TodoItem;
