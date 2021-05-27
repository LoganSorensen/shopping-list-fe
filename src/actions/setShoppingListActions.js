import {
  SET_SHOPPING_LIST,
  TOGGLE_ITEM_COMPLETED,
  CANCEL_SHOPPING_LIST,
  CANCEL_LIST,
} from "./types";

export const setShoppingList = (list) => {
  return { type: SET_SHOPPING_LIST, payload: list };
};

export const toggleItemCompleted = (id) => {
  return { type: TOGGLE_ITEM_COMPLETED, payload: id };
};

export const cancelShoppingList = () => {
  return { type: CANCEL_SHOPPING_LIST };
};

export const cancelList = () => {
  return { type: CANCEL_LIST };
};
