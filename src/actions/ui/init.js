// Framework
import { takeEvery } from 'redux-saga/effects';

// Actions
const INIT = 'UI/INIT';

// Reducer
export default function InitReducer(state = {}, action = {}) {
  switch (action.type) {
    case INIT:
    default:
      return state;
  }
}

// Action Creator
export const initApp = () => ({
  type: INIT
});

// Worker
export function* initializeAsyncStateWorker(action) {
  try {
    yield console.log('Init App');
  } catch (err) {
    yield console.log(err);
  }
}

// Watcher
export function* initSaga() {
  yield takeEvery(INIT, initializeAsyncStateWorker);
}
