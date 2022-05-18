import React from "react";

export const TodoListItem: React.FC<TodoListItemProps> = ({
  todo, toggleComplete, toggleDelete }) => {
  return (
    <ul>
      <label className={todo.complete ? "complete" : undefined}>
        <input
          type="checkbox"
          onChange={() => toggleComplete(todo)}
          checked={todo.complete}
        />
        {todo.text}
      </label>
      <button onClick={() => toggleDelete(todo)}>X</button>
    </ul>
  );
};