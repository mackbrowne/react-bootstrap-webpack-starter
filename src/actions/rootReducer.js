import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import InitReducer from './ui/init';
import NavbarReducer from './ui/navbar';
import places from './ui/places';

const reducers = {
  init: InitReducer,
  navbar: NavbarReducer,
  router: routerReducer,
  places
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
