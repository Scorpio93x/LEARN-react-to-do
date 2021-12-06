import React from "react";

function Form() {
  return (
    <div className="w-full shadow-2xl mb-2">
      <form action="#">
        <input
          type="text"
          className="w-full h-8 p-6 mb-2"
          placeholder="What do you need to do?"
        />
      </form>
    </div>
  );
}

export default Form;
