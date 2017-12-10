import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.css';
import 'react-toggle/style.css';

// Client Imports
import AppLayout from './components/AppLayout';
import configureStore, { history } from './lib/configureStore';

// Initial Actions
import { initApp } from './actions/ui/init';

import registerServiceWorker from './lib/registerServiceWorker';
import { ConnectedRouter } from 'react-router-redux';

// Make redux initial store
const store = configureStore();

// Actual Rendering Function
const renderApp = () =>
  render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <AppLayout />
      </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
  );

store.dispatch(initApp());
renderApp();
registerServiceWorker();
