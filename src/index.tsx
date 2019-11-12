import React from 'react';
import { render } from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';

// Client Imports
import AppLayout from './components/AppLayout';

import registerServiceWorker from './lib/registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';

// Actual Rendering Function
const renderApp = () =>
  render(
    <Router>
      <AppLayout />
    </Router>,
    document.getElementById('root')
  );

renderApp();

registerServiceWorker();
