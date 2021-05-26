import { SET_SHOPPING_LIST, TOGGLE_ITEM_COMPLETED } from "../actions/types";

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
    case TOGGLE_ITEM_COMPLETED:
      const itemsArr = state.items.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      });
      return {
        ...state,
        items: itemsArr,
      };
    default:
      return state;
  }
};
