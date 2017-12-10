// Libraries
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

// Reducers
import rootReducer from './../actions/rootReducer';

// Sagas
import { combinedSagas } from '../actions/rootReducer';

import isLocalHost from './registerServiceWorker';

export const registerSagas = (sagaMiddleware, sagas) =>
  sagas.forEach(sagaMiddleware.run);

export const history = createHistory();

/**
 * Configures the initialization of a React store, applying middleware, and interfacing with
 * tooling.
 *
 * @param  {State} initialState State object generated from indexed reducers.
 * @returns {Store} Generates an enhanced Redux Store.
 */
export const configureStore = initialState => {
  // Create a history of your choosing (we're using a browser history in this case)
  const routerReduxMiddleware = routerMiddleware(history);
  // Create saga middleware
  const sagaMiddleware = createSagaMiddleware();
  // Create a function that can apply the saga middleware to a StoreCreator
  const sagaStoreEnhancer = applyMiddleware(
    sagaMiddleware,
    routerReduxMiddleware
  );
  // Create a function that can create a store with the new middleware
  const createStoreWithMiddleWare = sagaStoreEnhancer(createStore);
  // Determine whether debug mode should be attached
  let store;
  if (isLocalHost) {
    const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__;
    const debug =
      typeof reduxDevTools === 'function' ? reduxDevTools() : a => a;
    // Actually create the store with the new middleware
    store = createStoreWithMiddleWare(rootReducer, initialState, debug);
  } else {
    store = createStoreWithMiddleWare(rootReducer, initialState);
  }
  // Register all sagas with middleware
  registerSagas(sagaMiddleware, combinedSagas());
  return store;
};

export default configureStore;
