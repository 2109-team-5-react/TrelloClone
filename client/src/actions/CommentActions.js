import * as types from "../constants/ActionTypes";
import apiClient from "../lib/ApiClient";

export function createCommentSuccess(comment) {
  return { type: types.CREATE_COMMENT_SUCCESS, comment };
}

export function createComment(comment, callback) {
  return function (dispatch) {
    apiClient.addComment(comment, (data) => {
      dispatch(createCommentSuccess(data));

      if (callback) {
        callback();
      }
    });
  };
}
