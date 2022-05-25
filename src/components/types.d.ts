/*
permette al compilatore di riconoscere i tipi presenti nel codice
come tipi globali in modo tale da non dover ogni volta importare/esportare
esplicitamente i nostri componenti all’interno dell’applicazione.
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

type AddTodo = (text: string) => void;