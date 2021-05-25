import { SET_SHOPPING_LIST } from "../actions/types";

const initialState = {
  listName: "Shopping list",
  items: [],
  completed: false,
  cancelled: false,
};

export const setShoppingList = (state = initialState, action) => {
  switch (action.type) {
    case SET_SHOPPING_LIST:
      return {
        ...state,
        listName: action.payload.listName,
        items: action.payload.items,
      };
    default:
      return state;
  }
};
