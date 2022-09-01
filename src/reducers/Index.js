import counterReducer from "./Counter";
import logedReducer from "./IsLogedin";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter: counterReducer,
  logedIn: logedReducer,
});

export default allReducers;
