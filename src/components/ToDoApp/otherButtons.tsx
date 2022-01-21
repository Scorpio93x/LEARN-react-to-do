import React from "react";
import clsx from "clsx";

//TODO: Fix bug regarding conditional rendering and css style.
//      tailwind css doesn't seem to load based on filter condition
function OtherButtons({
  clearCompleted,
  todosFiltered,
  filter,
  setFilter,
}: any) {
  return (
    <div
      className={
        "w-full flex flex-row my-4 p-2 border-t-2 border-gray-500 place-content-around"
      }
    >
      <div>
        <button
          className={clsx(
            "m-2 px-4 py-2 box-content hover:bg-gray-200 rounded-xl",
            {
              "border-gray-500 border-2": filter === "all",
            }
          )}
          onClick={() => {
            setFilter("all");
            todosFiltered("all");
          }}
        >
          All
        </button>
        <button
          className={clsx(
            "m-2 px-4 py-2 box-content hover:bg-gray-200 rounded-xl",
            {
              "border-2 border-gray-500": filter === "active",
            }
          )}
          onClick={() => {
            setFilter("active");
            todosFiltered("active");
          }}
        >
          Active
        </button>
        <button
          className={clsx(
            "m-2 px-4 py-2 box-content hover:bg-gray-200 rounded-xl",
            {
              "border-gray-500 border-2": filter === "completed",
            }
          )}
          onClick={() => {
            setFilter("completed");
            todosFiltered("completed");
          }}
        >
          Complete
        </button>
      </div>
      <div>
        <button
          className={
            "px-4 py-2 box-content border-gray-500 hover:bg-gray-200 border-2 rounded-xl"
          }
          onClick={clearCompleted}
        >
          Clear Completed
        </button>
      </div>
    </div>
  );
}

export default OtherButtons;
