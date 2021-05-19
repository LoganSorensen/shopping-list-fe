import { combineReducers } from "redux";

import { setPageState } from "./setPageStateReducer";
import { setItems } from "./setItemsReducer";

const rootReducer = combineReducers({
  setPageState,
  setItems,
});

export default rootReducer;
