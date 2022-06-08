import React, { useContext, useState } from "react";
import { TodosContext } from "../../context/TodosContext";

interface Props {
  todos: TodosProp[];
  setTodos: any;
  idTodo: string;
  setIdTodo: any;
}

interface TodosProp {
  id: number;
  taskName: string;
  isComplete: boolean;
  isEditing: boolean;
}

function TodoForm(): JSX.Element {
  const [todoInput, setTodoInput] = useState("");

  const handleInput = (event: any) => setTodoInput(event.target.value);
  const addTodo = (event: any) => {
    event.preventDefault();

    if (todoInput.trim().length === 0) {
      return;
    }
    setTodos([
      ...todos,
      {
        id: idTodo,
        taskName: todoInput,
        isComplete: false,
        isEditing: false,
      },
    ]);

    setIdTodo((previousTodoId: number) => previousTodoId + 1);

    setTodoInput("");
  };
  // @ts-ignore
  const { todos, setTodos, idTodo, setIdTodo }: Props =
    useContext(TodosContext);
  return (
    <div className="w-full shadow-2xl mb-2">
      <form action="#" onSubmit={addTodo}>
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
