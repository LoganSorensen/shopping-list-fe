import axios from "axios";
import {
  SET_INIITIAL_STATE,
  SET_ITEM_DETAILS,
  ADD_TO_LIST,
  REMOVE_FROM_LIST,
  SET_QUERY,
  SET_COUNT,
  ADD_ITEM,
  DELETE_ITEM,
} from "./types";

export const setInitialState = (state) => {
  return { type: SET_INIITIAL_STATE, payload: state };
};

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

export const addItem = (item) => (dispatch) => {
  axios
    .post("https://lsorensen-shopping-list.herokuapp.com/items", item)
    .then((res) => {
      dispatch({ type: ADD_ITEM, payload: res.data.createdItem });
    })
    .catch((err) => console.log(err));
};

export const deleteItem = (item) => (dispatch) => {
  axios
    .delete(`https://lsorensen-shopping-list.herokuapp.com/items/${item._id}`)
    .then((res) => {
      dispatch({ type: DELETE_ITEM, payload: item });
    })
    .catch((err) => console.log(err));
};
