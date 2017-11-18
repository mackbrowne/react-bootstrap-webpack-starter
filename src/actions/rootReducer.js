import { combineReducers } from "redux";

import InitReducer from "./ui/init";
import NavbarReducer from "./ui/navbar";

const reducers = {
  init: InitReducer,
  navbar: NavbarReducer
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
