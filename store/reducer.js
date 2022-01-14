import { combineReducers } from "redux";

import apiValues from "./apiValues/apiValuesSlice";
import userValues from "./userValues/userValuesSlice";

const reducers = combineReducers({
  apiValues,
  userValues,
});

export default reducers;
