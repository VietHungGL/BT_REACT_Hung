import Loading from "components/loading";
import React, { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  checkMissionAction,
  deleteMissionAction,
  deleteMissionSuccessAction,
  updateMissionAction,
  updateMissionSuccessAction,
} from "store/todo/acticon";

import "./addTodo.css";

function ListTodo(props) {
  const missions = useSelector((state) => state.todoReducer.missions);

  const selected = useSelector((state) => state.todoReducer.selected);
  // console.log("««««« missions »»»»»", missions);

  return missions.length > 0 ? (
    missions.map((m) => (
      <ListItem
        key={m.id}
        content={m.name}
        id={m.id}
        isChecked={selected.includes(m.id)}
      />
    ))
  ) : (
    <ListItem
      classes="text-danger"
      content="Không có nhiệm vụ"
      isHiddenButton
    />
  );
}

export default ListTodo;

//ListItem
function ListItem({ id, content, isChecked, classes, isHiddenButton = false }) {
  const [mission, setMission] = useState("");

  const dispatch = useDispatch();
  const loadingDelete = useSelector((state) => state.todoReducer.loadingDelete);
  const loadingUpdate = useSelector((state) => state.todoReducer.loadingUpdate);

  const onDeleteMission = () => {
    dispatch(deleteMissionAction(id));

    setTimeout(() => {
      dispatch(deleteMissionSuccessAction(id));
    }, 2000);
  };

  const onChangeMission = (e) => {
    setMission(e.target.value);
  };

  const onUpdateMission = () => {
    dispatch(updateMissionAction(id));

    setTimeout(() => {
      dispatch(updateMissionSuccessAction({ id, mission }));
    }, 1000);
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13 && mission) {
      onUpdateMission();
    }
  };

  const onSelectMission = useCallback(() => {
    dispatch(checkMissionAction(id));
  }, [dispatch, id]);

  useEffect(() => {
    setMission(content);
  }, [content]);

  return (
    <div className="input-group mb-3 d-flex align-items-center">
      <input
        type="text"
        className={`form-control ${classes}`}
        placeholder="Nhiệm vụ 1"
        value={mission}
        onChange={onChangeMission}
        onKeyDown={onKeyDown}
        // defaultValue={content}
        // disabled // k muốn cho người dùng sửa thì bật
      />

      {!isHiddenButton && (
        <div className="input-group-append d-flex">
          <div className="input-check">
            <input
              type="checkbox"
              onChange={onSelectMission}
              checked={isChecked}
            />
          </div>
          <button
            className="btn btn-outline-danger"
            type="button"
            onClick={onDeleteMission}
            disabled={loadingDelete.includes(id)}
          >
            {loadingDelete.includes(id) ? (
              <Loading />
            ) : (
              <ion-icon name="trash-outline"></ion-icon>
            )}
          </button>

          <button
            className="btn btn-outline-success"
            type="button"
            onClick={onUpdateMission}
            disabled={loadingUpdate.includes(id)}
          >
            {loadingUpdate.includes(id) ? (
              <Loading />
            ) : (
              <ion-icon name="create-outline"></ion-icon>
            )}
          </button>
        </div>
      )}
    </div>
  );
}
