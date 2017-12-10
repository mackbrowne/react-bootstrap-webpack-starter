import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import InitReducer, { initSaga } from './ui/init';
import NavbarReducer from './ui/navbar';
import TodoListReducer, { todosRouteSaga } from './todos/todoList';

const rootReducer = combineReducers({
  router: routerReducer,
  init: InitReducer,
  navbar: NavbarReducer,
  todos: TodoListReducer
});

export const combinedSagas = () => [initSaga, todosRouteSaga];

export default rootReducer;
