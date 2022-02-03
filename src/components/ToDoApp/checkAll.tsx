import React from "react";

function CheckAll({ remaining, completeAllTodos }: any): JSX.Element {
  return (
    <div
      className={
        "w-full flex flex-row my-4 p-2 border-t-2 border-gray-500 place-content-around"
      }
      onClick={completeAllTodos}
    >
      <button
        className={
          "px-4 py-2 border-2 border-white rounded bg-white hover:bg-gray-100"
        }
      >
        Check All
      </button>
      <p className={"p-2"}>{remaining} items remaining</p>
    </div>
  );
}

export default CheckAll;
