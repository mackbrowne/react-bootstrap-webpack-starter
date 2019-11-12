// Framework
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';

// Components
import { Row, Col } from 'react-bootstrap';

import LoadingComponent from './common/Loading';

import { AppContainer, Logo } from './AppLayout.style';

import logo from './../img/logo.svg';

const AsyncNavigation = Loadable({
  loader: () => import('./common/Navigation'),
  loading: LoadingComponent
});
const AsyncHome = Loadable({
  loader: () => import('./pages/Home'),
  loading: LoadingComponent
});
const AsyncPageOne = Loadable({
  loader: () => import('./pages/One'),
  loading: LoadingComponent
});
const AsyncPageTwo = Loadable({
  loader: () => import('./pages/Two'),
  loading: LoadingComponent
});
const AsyncPageThree = Loadable({
  loader: () => import('./pages/Three'),
  loading: LoadingComponent
});
const AsyncNotFound = Loadable({
  loader: () => import('./pages/NotFound'),
  loading: LoadingComponent
});

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
