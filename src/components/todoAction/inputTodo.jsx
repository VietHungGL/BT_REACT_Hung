import React from "react";

function InputTodo(props) {
  return (
    <>
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder=""
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />

        <button class="input-group-text" id="basic-addon2">
          Add
        </button>
      </div>
    </>
  );
}

export default InputTodo;
