import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMissionAction, addMissionSuccessAction } from "store/todo/acticon";

import Loading from "components/loading";

import "./addTodo.css";

function AddTodo(props) {
  const dispatch = useDispatch();
  const isLoadingAdd = useSelector((state) => state.todoReducer.isLoadingAdd);
  const [mission, setMission] = useState("");

  const onChange = (e) => {
    setMission(e.target.value);
  };

  const onAddMission = () => {
    dispatch(addMissionAction());

    setTimeout(() => {
      dispatch(addMissionSuccessAction(mission));

      setMission("");
    }, 200);
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13 && mission && !isLoadingAdd) {
      onAddMission(); // đoạn này sử lý Enter
    }
  };

  // console.log("««««« isLoadingAdd »»»»»", isLoadingAdd);

  return (
    <>
      <div className="input-add my-3">
        <input
          type="text"
          className="form-control"
          placeholder="Type your mission..."
          value={mission}
          onChange={onChange}
          onKeyDown={onKeyDown}
          disabled={isLoadingAdd}
        />

        {/* <button
          className="btn-add"
          type="button"
          onClick={onAddMission}
          disabled={!mission}
        >
          <ion-icon name="add-circle-outline"></ion-icon>
        </button> */}

        <div className="input-group-append">
          <button
            className="btn-add btn-outline-primary"
            type="button"
            onClick={onAddMission}
            disabled={!mission || isLoadingAdd}
          >
            {isLoadingAdd ? (
              <Loading />
            ) : (
              <ion-icon name="add-circle-outline"></ion-icon>
            )}
          </button>
        </div>
      </div>
    </>
  );
}

export default AddTodo;
