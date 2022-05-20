import React from "react";
import { TodoListItem } from "./TodoListItem";

export const TodoList: React.FC<TodoListProps> = ({
  todos, toggleComplete, toggleDelete }) => {
  return (
    <ul>
      {todos.map(todo => (
        <TodoListItem
          key={todo.text}
          todo={todo}
          toggleComplete={toggleComplete}
          toggleDelete={toggleDelete}
        />
      ))}
    </ul>
  );
};