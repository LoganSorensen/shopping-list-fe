import {
  SET_ITEM_DETAILS,
  ADD_TO_LIST,
  REMOVE_FROM_LIST,
  SET_QUERY,
  SET_COUNT,
} from "./types";

export const setItemDetails = (item) => {
  return { type: SET_ITEM_DETAILS, payload: item };
};

export const addToList = (item) => {
  return { type: ADD_TO_LIST, payload: item };
};

export const removeFromList = (item) => {
  return { type: REMOVE_FROM_LIST, payload: item };
};

export const setQuery = (query) => {
  return { type: SET_QUERY, payload: query };
};

export const setCount = (item) => {
  return { type: SET_COUNT, payload: item };
};
