import apiClient from "../lib/ApiClient";
import * as types from "../constants/ActionTypes";

export function createListSuccess(list) {
  return { type: types.CREATE_LIST_SUCCESS, list: list };
}

export function updateListSuccess(list) {
  return { type: types.UPDATE_LIST_SUCCESS, list: list };
}

export function createList(list, callback) {
  return function (dispatch) {
    apiClient.createList(list, (data) => {
      dispatch(createListSuccess(data));

      if (callback) {
        callback();
      }
    });
  };
}

export function updateList(list, id, callback) {
  return function (dispatch) {
    apiClient.updateList(list, id, (data) => {
      dispatch(updateListSuccess(data));

      if (callback) {
        callback();
      }
    });
  };
}
