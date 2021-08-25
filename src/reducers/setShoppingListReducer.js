import {
  SET_SHOPPING_LIST,
  TOGGLE_ITEM_COMPLETED,
  CANCEL_SHOPPING_LIST,
} from "../actions/types";

const initialState = {
  listId: null,
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
        listId: action.payload.id,
        listName: action.payload.list.listName,
        items: action.payload.list.items,
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
    case CANCEL_SHOPPING_LIST:
      return {
        ...state,
        items: [],
      };
    default:
      return state;
  }
};
