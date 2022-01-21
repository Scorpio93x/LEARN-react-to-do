import React from "react";
import Counter from "../../components/Counter";
import ToDoApp from "../../components/ToDoApp";

function ToDoPage(): JSX.Element {
  return (
    <div className="w-full text-center p-5 box-border bg-gray-100 font-bold text-2xl flex flex-col items-center">
      <ToDoApp />
      <Counter initialCount={0} />
    </div>
  );
}

export default ToDoPage;
