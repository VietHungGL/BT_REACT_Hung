import React from "react";

function ListAction(props) {
  return (
    <>
      <div class="input-group">
        <input
          type="text"
          class="form-control"
          placeholder=""
          aria-label="Input group example"
          aria-describedby="btnGroupAddon"
        />
        <div class="input-group-prepend">
          <button class="input-group-text" id="btnGroupAddon">
            <ion-icon name="trash-outline"></ion-icon>
          </button>
        </div>
      </div>

      {/* <ul class="nav">
        <li class="nav-item">
          <a class="nav-link active" href="#">
            Active
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Link
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Link
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">
            Disabled
          </a>
        </li>
      </ul> */}
    </>
  );
}

export default ListAction;
