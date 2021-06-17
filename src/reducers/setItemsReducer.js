import {
  SET_INIITIAL_STATE,
  SET_ITEM_DETAILS,
  ADD_TO_LIST,
  REMOVE_FROM_LIST,
  SET_QUERY,
  SET_COUNT,
  ADD_ITEM,
  DELETE_ITEM,
  CANCEL_LIST,
} from "../actions/types";

const initialState = {
  allCategories: [],
  items: [],
  query: "",
  categories: [],
  shoppingList: [],
  itemDetails: null,
};

export const setItems = (state = initialState, action) => {
  switch (action.type) {
    case SET_INIITIAL_STATE:
      return {
        ...state,
        allCategories: action.payload.categories,
        // categories: action.payload.categories,
        items: action.payload.items,
      };
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
        (item) => item._id !== action.payload.id
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
    case REMOVE_FROM_LIST:
      return {
        ...state,
        items: [...state.items, action.payload],
        shoppingList: state.shoppingList.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    case SET_COUNT:
      const newList = state.shoppingList.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            count: item.count + action.payload.value,
          };
        }
        return {
          ...item,
        };
      });
      return {
        ...state,
        shoppingList: newList,
      };
    case ADD_ITEM:
      console.log(action.payload);
      if (!state.allCategories.includes(action.payload.category)) {
        return {
          ...state,
          allCategories: [...state.allCategories, action.payload.category],
          items: [...state.items, action.payload],
        };
      }
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      };
    case CANCEL_LIST:
      return {
        ...state,
        items: [...state.items, ...state.shoppingList],
        shoppingList: [],
      };
    default:
      return state;
  }
};
