import apiClient from "../lib/ApiClient";
import * as types from "../constants/ActionTypes";

export function fetchBoardsRequest() {
  return { type: types.FETCH_BOARDS_REQUEST };
}

export function fetchBoardsSuccess(boards) {
  return { type: types.FETCH_BOARDS_SUCCESS, boards };
}

export function fetchBoardRequest(id) {
  return {type: types.FETCH_BOARD_REQUEST, id}
}

export function fetchBoardSuccess(board) {
  return { type: types.BOARD_FETCHED, board }
} 

export function createBoardRequest() {
  return { type: types.CREATE_BOARD_REQUEST };
}

export function createBoardSuccess(board) {
  return { type: types.CREATE_BOARD_SUCCESS, board: board };
}

export function fetchBoards() {
  return function(dispatch) {
    dispatch(fetchBoardsRequest());
    apiClient.getBoards(data => dispatch(fetchBoardsSuccess(data.boards)));
  };
}

export function createBoard(board, callback) {
  return function(dispatch) {
    dispatch(createBoardRequest());
    apiClient.createBoard(board, data => {
      dispatch(createBoardSuccess(data.board));

      if (callback) {
        callback();
      }
    });
  };
}

export function fetchBoard(id, callback) {
  return async function(dispatch) {
    dispatch(fetchBoardRequest(id));
    await apiClient.getBoard(id, data => {
      dispatch(fetchBoardSuccess(data.board))
      if (callback) {
        callback();
      }
    });
    
  }
}
