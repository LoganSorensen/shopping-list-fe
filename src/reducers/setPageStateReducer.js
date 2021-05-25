import {
  SET_CURRENT_PAGE,
  SET_SIDEBAR_COMPONENT,
  SET_SHOPPING_LIST_EDITABLE,
} from "../actions/types";

const initialState = {
  currentPage: window.location.pathname,
  sidebarComponent: "shoppingList",
  shoppingListEditable: true,
};

export const setPageState = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case SET_SIDEBAR_COMPONENT:
      return {
        ...state,
        sidebarComponent: action.payload,
      };
    case SET_SHOPPING_LIST_EDITABLE:
      return {
        ...state,
        shoppingListEditable: !state.shoppingListEditable,
      };
    default:
      return state;
  }
};
