import {
  SET_CURRENT_PAGE,
  SET_SIDEBAR_COMPONENT,
  SET_SHOPPING_LIST_EDITABLE,
} from "./types";

export const setCurrentPage = (page) => {
  return { type: SET_CURRENT_PAGE, payload: page };
};

export const setSidebarComponent = (component) => {
  return { type: SET_SIDEBAR_COMPONENT, payload: component };
};

export const setShoppingListEditable = () => {
  return { type: SET_SHOPPING_LIST_EDITABLE };
};
