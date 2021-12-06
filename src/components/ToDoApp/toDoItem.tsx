import React from "react";
import { XIcon } from "@heroicons/react/solid";

export interface Props {
  taskName: string;
}
function ToDoItem({ taskName }: Props): JSX.Element {
  return (
    <li className={"todo-item-container list-none w-full"}>
      <div className="flex flex-row p-2 box-content bg-white hover:bg-gray-100">
        <input
          className={
            "w-1/12 p-4 box-content place-self-center toDoItem-checkbox"
          }
          type="checkbox"
        />
        <p className={"w-11/12 p-4 box-content text-left"}> {taskName}</p>
        <button className={"w-1/12 mr-2 ml-auto"}>
          <XIcon className="h-5 w-5 mx-2 text-blue-500" />
        </button>
      </div>
    </li>
  );
}

export default ToDoItem;
