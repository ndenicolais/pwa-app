import React, { useState } from 'react';

export const AddTodo: React.FC<AddTodoProps> = ({ addTodo }) => {
  const [text, setText] = useState('');

  return (
    <form>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}/><br/>
      
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          addTodo(text, text);
          setText('');
        }}>Aggiungi attività
      </button>
    </form>
  );
};