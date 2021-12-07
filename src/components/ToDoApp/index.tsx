import React, { useState } from "react";
import NoTodos from "../ToDoApp/NoTodos";
import TodoForm from "../ToDoApp/todoForm";
import TodoList from "../ToDoApp/todoList";

function ToDoApp() {
  const [idTodo, setIdTodo] = useState(6);
  const [todos, setTodos] = useState([
    {
      id: 1,
      taskName: "I have to do something!",
      isComplete: true,
      isEditing: false,
    },
    {
      id: 2,
      taskName: "I have to do something! 2",
      isComplete: false,
      isEditing: false,
    },
    {
      id: 3,
      taskName: "I have to do something! 3",
      isComplete: false,
      isEditing: false,
    },
    {
      id: 4,
      taskName: "I have to do something! 4",
      isComplete: false,
      isEditing: false,
    },
    {
      id: 5,
      taskName: "I have to do something 5!",
      isComplete: false,
      isEditing: false,
    },
  ]);

  const completeToDo = (id: number) => {
    const updatedTodos = todos.map((todo: any) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const deleteToDo = (id: number) =>
    setTodos([...todos].filter((todo) => todo.id !== id));

  function addTodo(todo: string) {
    setTodos([
      ...todos,
      {
        id: idTodo,
        taskName: todo,
        isComplete: false,
        isEditing: false,
      },
    ]);

    setIdTodo((previousTodoId) => previousTodoId + 1);
  }
  const markAsEditing = (id: number) => {
    const updatedTodos = todos.map((todo: any) => {
      if (todo.id === id) {
        todo.isEditing = true;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const updateToDo = (event: any, id: number) => {
    const updatedTodos = todos.map((todo: any) => {
      if (todo.id === id) {
        if (event.target.value.trim().length === 0) {
          todo.isEditing = false;
          return todo;
        }
        todo.taskName = event.target.value;
        todo.isEditing = false;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  const cancelEdit = (id: number) => {
    const updatedTodos = todos.map((todo: any) => {
      if (todo.id === id) {
        todo.isEditing = false;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div
      className={"w-full md:w-8/12 p-4 box-content bg-blue-200 shadow-2xl mb-6"}
    >
      <h1 className={"text-left my-2 text-3xl"}>ToDo App</h1>
      <TodoForm addTodo={addTodo} />
      {todos.length > 0 ? (
        <TodoList
          todos={todos}
          completeToDo={completeToDo}
          markAsEditing={markAsEditing}
          updateToDo={updateToDo}
          cancelEdit={cancelEdit}
          deleteToDo={deleteToDo}
        />
      ) : (
        <NoTodos />
      )}
    </div>
  );
}

export default ToDoApp;
