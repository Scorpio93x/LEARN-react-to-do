import React from "react";
import ToDoItem from "./toDoItem";
import tasks from "../../data/tasks.json";
import Form from "./form";
import CheckAll from "./checkAll";

function ToDoApp() {
  return (
    <div
      className={"w-full md:w-8/12 p-4 box-content bg-blue-200 shadow-2xl mb-6"}
    >
      <h1 className={"text-left my-2 text-3xl"}>ToDo App</h1>
      <Form />
      {tasks.map((task) => (
        <ToDoItem taskName={task.taskName} key={task.id} />
      ))}
      <CheckAll />
    </div>
  );
}

export default ToDoApp;
