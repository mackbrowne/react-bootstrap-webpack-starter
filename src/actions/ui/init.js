// Framework
import { takeEvery, put } from 'redux-saga/effects';
import { nextPage } from './places';

// Actions
export const INIT = 'UI/INIT';
export const INIT_SUCCESS = 'UI/INIT_SUCCESS';

/*** Action Creators ***/
export const initApp = () => ({
  type: INIT
});

export const initAppSuccess = () => ({
  type: INIT_SUCCESS
});

/*** Reducer ***/
export const DEFAULT_STATE = {};

export default function InitReducer(state = DEFAULT_STATE, action = {}) {
  switch (action.type) {
    case INIT_SUCCESS:
    case INIT:
    default:
      return state;
  }
}

/*** Sagas ***/
// Worker
export function* initializeAsyncStateWorker(action) {
  try {
    yield put(initAppSuccess());
    yield put(nextPage());
  } catch (err) {
    yield console.log(err);
  }
}

// Watcher
export function* initSaga() {
  yield takeEvery(INIT, initializeAsyncStateWorker);
}
