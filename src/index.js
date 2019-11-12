import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.css';

// Client Imports
import AppLayout from './components/AppLayout';
import configureStore, { history } from './lib/configureStore';

// Initial Actions
import { initApp } from './actions/ui/init';

import registerServiceWorker from './lib/registerServiceWorker';
import { Router } from 'react-router-dom';

// Make redux initial store
const store = configureStore();

// Actual Rendering Function
const renderApp = () =>
  render(
    <Provider store={store}>
      <Router history={history}>
        <AppLayout />
      </Router>
    </Provider>,
    document.getElementById('root')
  );

store.dispatch(initApp());
renderApp();

registerServiceWorker();
