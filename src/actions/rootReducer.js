import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import InitReducer, { initSaga } from './ui/init';
import InputReducer from './ui/input';
import AuthReducer, { loginSaga } from './auth/auth';
import NavbarReducer from './ui/navbar';
import TodoListReducer, { todosRouteSaga } from './todos/todoList';

const rootReducer = combineReducers({
  router: routerReducer,
  input: InputReducer,
  auth: AuthReducer,
  init: InitReducer,
  navbar: NavbarReducer,
  todos: TodoListReducer
});

export const combinedSagas = () => [initSaga, loginSaga, todosRouteSaga];

export default rootReducer;
