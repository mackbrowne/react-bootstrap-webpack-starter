// Framework
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import loadable from '@loadable/component';

// Components
import { Row, Col } from 'react-bootstrap';

import { AppContainer, Logo } from './AppLayout.style';

import logo from './../img/logo.svg';

const AsyncNavigation = loadable(() => import('./common/Navigation'));
const AsyncHome = loadable(() => import('./pages/Home'));
const AsyncNotFound = loadable(() => import('./pages/NotFound'));

const navigationItems = [{ label: 'Home', path: '/' }];

/**
 * Main rendering entry point for the app.
 *
 * @returns {Element} Stateless functional React component.
 */
const AppLayout = () => (
  <div className="App">
    <AppContainer>
      <Row className="bg-faded">
        <Col sm={2}>
          <Logo src={logo} alt="logo" className="img-fluid" fluid />
        </Col>
        <Col>
          <AsyncNavigation navigationItems={navigationItems} />
        </Col>
      </Row>
      <Switch>
        <Route exact path="/" component={AsyncHome} />
        <Route path="*" component={AsyncNotFound} />
      </Switch>
      <Row>
        <Col>
          <footer className="py-1 text-center">
            <p>
              Created by: <a href="https://mackbrowne.com/">Mack Browne</a>
            </p>
          </footer>
        </Col>
      </Row>
    </AppContainer>
  </div>
);

export default AppLayout;
