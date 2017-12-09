import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import InitReducer from './ui/init';
import NavbarReducer from './ui/navbar';

const reducers = {
  init: InitReducer,
  navbar: NavbarReducer,
  router: routerReducer
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
