import { SET_ITEM_DETAILS, ADD_TO_LIST, SET_QUERY } from "./types";

export const setItemDetails = (item) => {
  return { type: SET_ITEM_DETAILS, payload: item };
};

export const addToList = (item) => {
  return { type: ADD_TO_LIST, payload: item };
};

export const setQuery = (query) => {
  return { type: SET_QUERY, payload: query };
};
