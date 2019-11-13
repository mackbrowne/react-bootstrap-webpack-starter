import React from 'react';
import { render } from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';

// Client Imports
import AppLayout from './components/AppLayout';

import registerServiceWorker from './lib/registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

// Actual Rendering Function
const renderApp = () =>
  render(
    <Router>
      <ThemeProvider
        theme={{
          breakpoints: {
            sm: '576px',
            md: '768px',
            lg: '992px',
            xl: '1200px'
          }
        }}
      >
        <AppLayout />
      </ThemeProvider>
    </Router>,
    document.getElementById('root')
  );

renderApp();

registerServiceWorker();
