import apiClient from "../lib/ApiClient";
import * as types from "../constants/ActionTypes";

export function createCardSuccess(card) {
  return { type: types.CREATE_CARD_SUCCESS, card };
}

export function createCard(card, callback) {
  return function (dispatch) {
    apiClient.addCard(card, (data) => {
      dispatch(createCardSuccess(data));

      if (callback) {
        callback();
      }
    });
  };
}