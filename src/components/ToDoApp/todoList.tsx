import React from "react";
import { XIcon } from "@heroicons/react/solid";
import clsx from "clsx";

export interface Props {
  todos: any[];
  completeToDo: any;
  markAsEditing: any;
  updateToDo: any;
  deleteToDo: any;
  cancelEdit: any;
}

function TodoList({
  todos,
  completeToDo,
  markAsEditing,
  updateToDo,
  deleteToDo,
  cancelEdit,
}: Props): JSX.Element {
  let number = 0;
  todos.map((todo) => (!todo.isComplete ? number++ : null));
  return (
    <>
      <ul className={"todo-list"}>
        {todos.map((todo) => (
          <li className={"todo-item-container list-none w-full"} key={todo.id}>
            <div className="flex flex-row p-2 box-content bg-white hover:bg-gray-100">
              <input
                className={
                  "w-1/12 p-4 box-content place-self-center toDoItem-checkbox"
                }
                type="checkbox"
                onChange={() => completeToDo(todo.id)}
                checked={todo.isComplete}
              />
              {!todo.isEditing ? (
                <p
                  className={clsx("w-11/12 p-4 box-content text-left", {
                    "line-through": todo.isComplete,
                  })}
                  onDoubleClick={() => markAsEditing(todo.id)}
                >
                  {todo.taskName}
                </p>
              ) : (
                <input
                  type={"text"}
                  defaultValue={todo.taskName}
                  onBlur={(event) => updateToDo(event, todo.id)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      updateToDo(event, todo.id);
                    } else if (event.key === "Escape") {
                      cancelEdit(todo.id);
                    }
                  }}
                  autoFocus
                  className={clsx("w-11/12 p-4 box-content text-left", {
                    "line-through": todo.isComplete,
                  })}
                />
              )}

              <button
                className={"w-1/12 mr-2 ml-auto toDoItem-remove"}
                onClick={() => deleteToDo(todo.id)}
              >
                <XIcon className="h-5 w-5 mx-2 text-blue-500" />
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div
        className={
          "w-full flex flex-row p-2 border-t-2 border-gray-500 place-content-around"
        }
      >
        <button
          className={
            "px-4 py-2 border-2 border-white rounded bg-white hover:bg-gray-100"
          }
        >
          Check All
        </button>
        <p className={"p-2"}>{number} items remaining</p>
      </div>
    </>
  );
}

export default TodoList;
