import { SET_ITEM_DETAILS, ADD_TO_LIST } from "./types";

export const setItemDetails = (item) => {
  return { type: SET_ITEM_DETAILS, payload: item };
};

export const addToList = (item) => {
  return { type: ADD_TO_LIST, payload: item };
};
