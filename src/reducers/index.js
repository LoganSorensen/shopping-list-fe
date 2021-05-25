import { combineReducers } from "redux";

import { setPageState } from "./setPageStateReducer";
import { setItems } from "./setItemsReducer";
import { setShoppingList } from "./setShoppingListReducer";

const rootReducer = combineReducers({
  setPageState,
  setItems,
  setShoppingList,
});

export default rootReducer;
