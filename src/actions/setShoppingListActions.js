import { SET_SHOPPING_LIST } from "./types";

export const setShoppingList = (list) => {
    console.log(list)
  return { type: SET_SHOPPING_LIST, payload: list };
};
