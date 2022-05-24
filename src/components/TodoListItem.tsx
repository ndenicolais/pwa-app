import React from "react";

export const TodoListItem: React.FC<TodoListItemProps> = ({
  todo, toggleComplete, toggleDelete }) => {
  return (
    <ol>
      <label className={todo.complete ? "complete" : undefined}>
        <input
        id="checkbox"
        type="checkbox"
        onChange={() => toggleComplete(todo)}
        checked={todo.complete}
        />
        {todo.text}
        
      </label>
      <button
      id="delete-button"
      onClick={() =>
      toggleDelete(todo)}>X
      </button>
    </ol>
  );
};