import React, { useState } from "react";

interface Props {
  addTodo: any;
}
function TodoForm({ addTodo }: Props): JSX.Element {
  const [todoInput, setTodoInput] = useState("");

  const handleInput = (event: any) => setTodoInput(event.target.value);
  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (todoInput.trim().length === 0) {
      return;
    }
    addTodo(todoInput);
    setTodoInput("");
  };
  return (
    <div className="w-full shadow-2xl mb-2">
      <form action="#" onSubmit={handleSubmit}>
        <input
          type="text"
          className="w-full h-8 p-6 mb-2"
          placeholder="What do you need to do?"
          value={todoInput}
          onChange={handleInput}
        />
      </form>
    </div>
  );
}

export default TodoForm;
