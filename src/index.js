import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';

// Client Imports
import AppLayout from './components/AppLayout';
import configureStore from './lib/configureStore';

// Initial Actions
import { initApp } from './actions/ui/init';

import registerServiceWorker from './lib/registerServiceWorker';

// Make redux initial store
const store = configureStore();

// Actual Rendering Function
const renderApp = () =>
  render(
    <Provider store={store}>
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    </Provider>,
    document.getElementById('root')
  );

store.dispatch(initApp());
renderApp();

registerServiceWorker();
