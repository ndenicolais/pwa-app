import { useEffect, useState } from 'react';
import { TodoList } from './TodoList';
import { AddTodo } from './AddTodo';
import '/src/style.css'

function Todo() {
  /* REACT HOOK
  useState()
  accetta un parametro (stato iniziale)
  e ritorna due valori (stato corrente e funzone che aggiorna lo stato)
  */
  const [todos, setTodos] = useState(() => {
    // otteniamo i "todos" da localStorage
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });

  /* REACT HOOK
  useEffect()
  si attiva di default dopo il primo render del componente
  e poi ogni volta che si ha un aggiornamento di stato
  e permette di restituire l'azione configurata
  */
  useEffect(() => {
    // aggiungiamo i todos al localStorage
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  
  // verifica se un todo viene selezionato e quindi lo contrassegna come completato
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

  // elimina un todo
  const toggleDelete: ToggleDelete = (todoToDelete: Todo) => {
    const newTodosState = todos.filter((todo: any) => 
    todo.text !== todoToDelete.text);
    setTodos(newTodosState);
  }
  
  // aggiungi un todo
  const addTodo: AddTodo = (text: string) => {
    const newTodo = {text, complete: false };
    setTodos([...todos, newTodo]);
  };
  
  return (
    <div className="App">
    <h1>Todo List</h1>
      <TodoList
      todos={todos}
      toggleComplete={toggleComplete}
      toggleDelete={toggleDelete}
      />
      <AddTodo addTodo={addTodo}/>
      <form action="/">
      <button
      id="default-button"
      type='submit'>Homepage
      </button>
      </form>
    </div>
  );
}

export default Todo;