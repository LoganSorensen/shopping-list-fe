import { SET_SHOPPING_LIST, TOGGLE_ITEM_COMPLETED } from "./types";

export const setShoppingList = (list) => {
  return { type: SET_SHOPPING_LIST, payload: list };
};

export const toggleItemCompleted = (id) => {
  return {type: TOGGLE_ITEM_COMPLETED, payload: id}
}
