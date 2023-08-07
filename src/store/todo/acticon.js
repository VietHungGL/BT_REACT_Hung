import * as ActionTypes from "./actionTypes";

//Them
export const addMissionAction = (mission) => ({
  type: ActionTypes.ADD_MISSION, // ACTION TYPE
  // payload: mission, // PARAMETER
});

export const addMissionSuccessAction = (mission) => ({
  type: ActionTypes.ADD_MISSION_SUCCESS, // ACTION TYPE
  payload: mission, // PARAMETER
});

export const addMissionFailedAction = () => ({
  type: ActionTypes.ADD_MISSION_FAILED, // ACTION TYPE
});

//Update
export const updateMissionAction = (id) => ({
  type: ActionTypes.UPDATE_MISSION,
  payload: id,
});

export const updateMissionSuccessAction = (payload) => ({
  type: ActionTypes.UPDATE_MISSION_SUCCESS, // ACTION TYPE
  payload, // PARAMETER
});

export const updateMissionFailedAction = () => ({
  type: ActionTypes.UPDATE_MISSION_FAILED, // ACTION TYPE
});

// Xoa
export const deleteMissionAction = (id) => ({
  type: ActionTypes.DELETE_MISSION,
  payload: id, //id PARAMETER
});

export const deleteMissionSuccessAction = (id) => ({
  type: ActionTypes.DELETE_MISSION_SUCCESS, // ACTION TYPE
  payload: id, //id PARAMETER
});

export const deleteMissionFailedAction = () => ({
  type: ActionTypes.DELETE_MISSION_FAILED, // ACTION TYPE
});
