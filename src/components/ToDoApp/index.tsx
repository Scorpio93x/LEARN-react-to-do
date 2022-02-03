import React, {
  MutableRefObject,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import NoTodos from "../ToDoApp/NoTodos";
import TodoForm from "../ToDoApp/todoForm";
import TodoList from "../ToDoApp/todoList";

function ToDoApp() {
  const [name, setName] = useState("");
  const nameInput = useRef() as MutableRefObject<HTMLInputElement>;
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
  const completeAllTodos = () => {
    const updatedTodos = todos.map((todo: any) => {
      todo.isComplete = true;
      return todo;
    });
    setTodos(updatedTodos);
  };

  const todosFiltered = (filter: string) => {
    if (filter === "all") {
      return todos;
    } else if (filter === "active") {
      return todos.filter((todo) => !todo.isComplete);
    } else if (filter === "completed") {
      return todos.filter((todo) => todo.isComplete);
    }
  };

  //`remainingCalculation` created for purpose of using useMemo.
  // useMemo takes function that returns certain parameter and then changes it based on dependency coming from that
  // function.

  const remainingCalculation = () => {
    // console.log("Calculating remaining todos the ultra slow way...");
    // for (let index: number = 0; index < 2000000000; index++) {}
    return todos.filter((todo) => !todo.isComplete).length;
  };
  const remaining = useMemo(remainingCalculation, [todos]);
  const clearCompleted = () =>
    setTodos([...todos].filter((todo) => !todo.isComplete));

  useEffect(() => {
    console.log("use effect running");
    nameInput.current.focus();

    return function cleanup() {
      console.log("cleaning up...");
    };
  }, [todos]);
  return (
    <div
      className={"w-full md:w-8/12 p-4 box-content bg-blue-200 shadow-2xl mb-6"}
    >
      <div className={"m-2"}>
        <h1>What is your name?</h1>
        <form action="#">
          <input
            className={"p-4 "}
            type="text"
            placeholder="What is your name?"
            ref={nameInput}
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </form>
        {name && <p className={"p-2"}>Hi {name}</p>}
      </div>
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
          clearCompleted={clearCompleted}
          remaining={remaining}
          completeAllTodos={completeAllTodos}
          todosFiltered={todosFiltered}
        />
      ) : (
        <NoTodos />
      )}
    </div>
  );
}

export default ToDoApp;
