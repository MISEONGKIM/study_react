import { combineReducers } from "redux";
import counter from "./Counter";
import ui from "./Ui";

const reducers = combineReducers({
  counter,
  ui
}); //리듀서들 합하는 것

export default reducers;
