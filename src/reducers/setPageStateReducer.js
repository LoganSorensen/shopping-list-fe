import { SET_CURRENT_PAGE, SET_SIDEBAR_COMPONENT } from "../actions/types";

const initialState = {
  currentPage: window.location.pathname,
  sideBarComponent: "shoppingList",
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
        sideBarComponent: action.payload,
      };
    default:
      return state;
  }
};
