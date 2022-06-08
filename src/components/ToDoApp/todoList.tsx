import React, { useContext, useState } from "react";
import { XIcon } from "@heroicons/react/solid";
import clsx from "clsx";
import CheckAll from "./checkAll";
import OtherButtons from "./otherButtons";

export interface Props {
  todos: any[];
  completeToDo: any;
  markAsEditing: any;
  updateToDo: any;
  deleteToDo: any;
  cancelEdit: any;
  remaining: any;
  clearCompleted: any;
  completeAllTodos: any;
  todosFiltered: any;
}

function TodoList({
  completeToDo,
  markAsEditing,
  updateToDo,
  deleteToDo,
  cancelEdit,
  remaining,
  clearCompleted,
  completeAllTodos,
  todosFiltered,
}: Props): JSX.Element {
  const [filter, setFilter] = useState("all");

  return (
    <>
      <ul className={"todo-list"}>
        {todosFiltered(filter).map((todo: any) => (
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
      <CheckAll remaining={remaining} completeAllTodos={completeAllTodos} />
      <OtherButtons
        clearCompleted={clearCompleted}
        todosFiltered={todosFiltered}
        filterr={filter}
        setFilter={setFilter}
      />
    </>
  );
}

export default TodoList;
