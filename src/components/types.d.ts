/*
Inseriamo tutti i tipi utilizzati nel codice
all'interno di questo file in modo tale che
il nostro compilatore li riconosca e non
dobbiamo importare/esportare in maniera esplicita
*/

type Todo = {
  text: string;
  complete: boolean;
};

type TodoListItemProps = {
  todo: Todo;
  toggleComplete: ToggleComplete;
  toggleDelete: ToggleDelete;
};

type TodoListProps = {
  todos: Todo[];
  toggleComplete: ToggleComplete;
  toggleDelete: ToggleDelete;
};

type AddTodoProps = {
  addTodo: AddTodo;
};

type ToggleComplete = (selectedTodo: Todo) => void;

type ToggleDelete = (todo: Todo) => void;

type AddTodo = (id: string, text: string) => void;