import React from "react";
import tasks from "../../data/tasks.json";

function CheckAll() {
  const checkAll = () => {
    const checkboxes = document.getElementsByClassName("toDoItem-checkbox");
    for (let i = 0; i < checkboxes.length; i++) {
      (checkboxes[i] as HTMLInputElement).checked = true;
    }
  };
  let number = 0;
  tasks.map((task) => (!task.isComplete ? number++ : null));
  return (
    <div
      className={
        "w-full flex flex-row p-2 border-t-2 border-gray-500 place-content-around"
      }
    >
      <button
        className={
          "px-4 py-2 border-2 border-white rounded bg-white hover:bg-gray-100"
        }
        onClick={checkAll}
      >
        Check All
      </button>
      <p className={"p-2"}>{number} items remaining</p>
    </div>
  );
}

export default CheckAll;
