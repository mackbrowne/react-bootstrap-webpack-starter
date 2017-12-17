// Framework
import { call, takeEvery, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';

// Requests
import { loginRequest } from './api/login';

// Actions
export const DISMISS_ERROR = 'AUTH/DISMISS_ERROR';
export const LOGIN = 'AUTH/LOGIN';
export const LOGIN_SUCCESS = 'AUTH/LOGIN_SUCCESS';
export const LOGIN_ERROR = 'AUTH/LOGIN_ERROR';
export const LOGOUT = 'AUTH/LOGOUT';

/*** Action Creators ***/
export const dismissError = () => ({
  type: DISMISS_ERROR
});

export const login = email => ({
  type: LOGIN,
  email
});

export const loginSuccess = user => ({
  type: LOGIN_SUCCESS,
  isLoggedIn: true,
  user
});

export const loginError = error => ({
  type: LOGIN_ERROR,
  error
});

export const logout = () => ({
  type: LOGOUT
});

/*** Reducer ***/
export const DEFAULT_STATE = {
  isLoggedIn: false,
  user: {},
  error: ''
};

export default function AuthReducer(
  state = DEFAULT_STATE,
  { user, error, type } = {}
) {
  switch (type) {
    case LOGIN_ERROR:
      return {
        ...state,
        error,
        isLoggedIn: false
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user
      };
    case LOGOUT:
      return {
        ...state,
        user: {},
        isLoggedIn: false
      };
    case DISMISS_ERROR:
      return {
        ...state,
        error: ''
      };
    case LOGIN:
    default:
      return state;
  }
}

/*** Sagas ***/
// Worker
function* initializeAsyncLoginWorker({ email }) {
  try {
    const user = yield call(loginRequest, email);
    yield put(loginSuccess(user));
    yield put(push('/'));
  } catch (err) {
    yield put(loginError('User Not Found'));
  }
}

// Watcher
export function* loginSaga() {
  yield takeEvery(LOGIN, initializeAsyncLoginWorker);
}
