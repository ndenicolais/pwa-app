import React, { useEffect, useState } from 'react';
import { TodoList } from './TodoList';
import { AddTodo } from './AddTodo';
import '/src/style.css'

function Todo() {
  const [todos, setTodos] = useState(() => {
    // otteniamo i "todos" da localStorage
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });

  useEffect(() => {
    // aggiungiamo i "todos" al localStorage
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  
  const toggleComplete: ToggleComplete = (selectedTodo: Todo) => {
    const newTodos = todos.map((todo: any) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  // elimina "todo"
  const toggleDelete: ToggleDelete = (todoToDelete: Todo) => {
    const newTodosState = todos.filter((todo: any) => todo.text !== todoToDelete.text);
    setTodos(newTodosState);
  }
  
  // aggiungi "todo"
  const addTodo: AddTodo = (text: string) => {
    const newTodo = {text, complete: false };
    setTodos([...todos, newTodo]);
  };
  
  return (
    <div className="App">
    <h1>Todo List</h1>
    <dt>
      <TodoList todos={todos} toggleComplete={toggleComplete} toggleDelete={toggleDelete}/>
      <AddTodo addTodo={addTodo}/><br/>
    </dt>
    <form action="/">
      <button id="default-button"
      type='submit'>Homepage</button>
      </form>
    </div>
  );
}

export default Todo;