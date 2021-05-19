import { SET_CURRENT_PAGE, SET_SIDEBAR_COMPONENT } from "./types";

export const setCurrentPage = (page) => {
  return { type: SET_CURRENT_PAGE, payload: page };
};

export const setSidebarComponent = (component) => {
  return { type: SET_SIDEBAR_COMPONENT, payload: component };
};
