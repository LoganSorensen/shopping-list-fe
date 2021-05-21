import { SET_ITEM_DETAILS, ADD_TO_LIST, SET_QUERY } from "../actions/types";
import { data } from "../utils/data";

const initialState = {
  allCategories: data.categories,
  items: data.items,
  query: "",
  categories: [],
  shoppingList: [],
  itemDetails: null,
};

export const setItems = (state = initialState, action) => {
  switch (action.type) {
    case SET_QUERY:
      return {
        ...state,
        query: action.payload,
      };
    case SET_ITEM_DETAILS:
      return {
        ...state,
        itemDetails: action.payload,
      };
    case ADD_TO_LIST:
      const filteredData = state.items.filter(
        (item) => item.id !== action.payload.id
      );

      // checks if a category matching the items exists already
      if (state.categories.includes(action.payload.category)) {
        return {
          ...state,
          items: filteredData,
          shoppingList: [...state.shoppingList, action.payload],
        };
        // if the category doesn't exist, creates a new entry for the category
      } else {
        return {
          ...state,
          items: filteredData,
          categories: [...state.categories, action.payload.category],
          shoppingList: [...state.shoppingList, action.payload],
        };
      }
    default:
      return state;
  }
};
