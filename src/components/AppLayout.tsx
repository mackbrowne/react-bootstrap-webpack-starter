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
const AsyncPageOne = loadable(() => import('./pages/One'));
const AsyncPageTwo = loadable(() => import('./pages/Two'));
const AsyncPageThree = loadable(() => import('./pages/Three'));
const AsyncNotFound = loadable(() => import('./pages/NotFound'));

const navigationItems = [
  { label: 'Home', path: '/' },
  { label: 'Page 1', path: 'page1' },
  { label: 'Page 2', path: 'page2' },
  { label: 'Page 3', path: 'page3' }
];

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
      <Row>
        <Col>
          <Switch>
            <Route exact path="/" component={AsyncHome} />
            <Route exact path="/page1" component={AsyncPageOne} />
            <Route exact path="/page2" component={AsyncPageTwo} />
            <Route exact path="/page3" component={AsyncPageThree} />
            <Route path="*" component={AsyncNotFound} />
          </Switch>
        </Col>
      </Row>
      <Row>
        <Col>
          <footer className="py-1 text-center">
            <p>
              Created by: <a href="https://mackbrowne.com/">Mack Browne</a> and
              adapted from{' '}
              <a href="https://github.com/mackbrowne/beehive">Beehive</a>
            </p>
          </footer>
        </Col>
      </Row>
    </AppContainer>
  </div>
);

export default AppLayout;
