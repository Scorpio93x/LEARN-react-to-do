import React from "react";
import { XIcon } from "@heroicons/react/solid";

export interface Props {
  taskName: string;
}
function ToDoItem({ taskName }: Props): JSX.Element {
  return (
    <div className="flex flex-row p-2 box-content bg-white hover:bg-gray-100 mx-1">
      <input className={"p-4 box-content place-self-center"} type="checkbox" />
      <li className={"p-4 box-content"}> {taskName}</li>
      <button>
        <XIcon className="h-5 w-5 mx-4 text-blue-500" />
      </button>
    </div>
  );
}

export default ToDoItem;
