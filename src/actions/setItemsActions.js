import { SET_ITEM_DETAILS } from "./types";

export const setItemDetails = (item) => {
    // console.log(item)
  return { type: SET_ITEM_DETAILS, payload: item };
};
