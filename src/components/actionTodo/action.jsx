import React, { useCallback } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  checkALLMissionAction,
  deleteSelectedMissionAction,
  deleteSelectedMissionSuccessAction,
} from "store/todo/acticon";

import "./addTodo.css";
function Action(props) {
  const dispatch = useDispatch();

  const selected = useSelector((state) => state.todoReducer.selected);
  const missions = useSelector((state) => state.todoReducer.missions);

  const onSelectedAll = useCallback(() => {
    dispatch(checkALLMissionAction());
  }, [dispatch]);

  const onDeleteSelected = useCallback(() => {
    dispatch(deleteSelectedMissionAction());

    setTimeout(() => {
      dispatch(deleteSelectedMissionSuccessAction());
    }, 500);
  }, [dispatch]);

  return (
    <div className="d-flex align-items-center my-4">
      <input
        className="form-check-input"
        type="checkbox"
        checked={missions.length === selected.length && selected.length > 0}
        onChange={onSelectedAll}
      />
      <button
        type="button"
        className="btn-action btn-danger"
        disabled={selected.length === 0}
        onClick={onDeleteSelected}
      >
        Xóa mục đã chọn
      </button>
    </div>
  );
}

export default Action;
