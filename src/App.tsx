import React, { useState } from 'react';
import { TodoList } from './TodoList';
import { AddTodo } from './AddTodo';
import logo from '/public/logo-512x512.png'
import './App.css'

const initialTodos: Todo[] = [
  {
    text: 'Attività da eseguire',
    complete: false,
  },
  {
    text: 'Attività eseguita',
    complete: true,
  },
];

function App() {
  const [todos, setTodos] = useState(initialTodos);

  const toggleComplete: ToggleComplete = (selectedTodo: Todo) => {
    const newTodos = todos.map((todo) => {
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

  const toggleDelete: ToggleDelete = (todoToDelete: Todo) => {
    const newTodosState = todos.filter((todo) => todo.text !== todoToDelete.text);
    setTodos(newTodosState);
  }
  
  const addTodo: AddTodo = (text: string) => {
    const newTodo = {text, complete: false };
    setTodos([...todos, newTodo]);
  };
  
  return (
    <div className="App">
    <h1>Todo List</h1>
    <img src={logo} className="App-logo" alt="logo" />
    <ul>
      <TodoList todos={todos} toggleComplete={toggleComplete} toggleDelete={toggleDelete}/>
      <AddTodo addTodo={addTodo}/><br/>
    <h2><a href="https://github.com/ndenicolais/todo-list-react-ts">Created by NDN</a></h2>
    </ul>
    </div>
  );
}

export default App;