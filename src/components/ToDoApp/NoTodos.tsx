import React from "react";
import { ClipboardIcon } from "@heroicons/react/solid";

function NoTodos() {
  return (
    <div className={"text-center w-full h-auto"}>
      <ClipboardIcon className="h-12 w-12 mx-2 text-white-500 mx-auto my-0" />
      <p>Add todo's above!</p>
    </div>
  );
}

export default NoTodos;
