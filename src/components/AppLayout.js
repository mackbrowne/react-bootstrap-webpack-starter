// @flow
// Framework
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';

// Components
import { Row, Col } from 'reactstrap';

import LoadingComponent from './common/LoadingComponent';

import { AppContainer, Logo } from './AppLayout.style';

import logo from './../img/logo.svg';

const AsyncNavigationContainer = Loadable({
  loader: () => import('./common/navigation/NavigationContainer'),
  loading: LoadingComponent
});
const AsyncHomeContainer = Loadable({
  loader: () => import('./pages/home/HomeContainer'),
  loading: LoadingComponent
});
const AsyncTodoListContainer = Loadable({
  loader: () => import('./pages/todos/TodoListContainer'),
  loading: LoadingComponent
});
const AsyncPageTwoContainer = Loadable({
  loader: () => import('./pages/two/PageTwoContainer'),
  loading: LoadingComponent
});
const AsyncPageThreeContainer = Loadable({
  loader: () => import('./pages/three/PageThreeContainer'),
  loading: LoadingComponent
});
const AsyncNotFound = Loadable({
  loader: () => import('./pages/NotFound'),
  loading: LoadingComponent
});

const navigationItems = [
  { label: 'Home', path: '/' },
  { label: 'Todos', path: 'todos' },
  { label: 'Page 2', path: 'page2' },
  { label: 'Page 3', path: 'page3' }
];

/**
 * Main rendering entry point for the app.
 *
 * @returns {Element} Stateless functional React component.
 */
const AppLayout = ({ children }) => (
  <div className="App">
    <AppContainer>
      <Row className="bg-faded">
        <Col sm={2}>
          <Logo src={logo} alt="logo" className="img-fluid" fluid />
        </Col>
        <Col>
          <AsyncNavigationContainer navigationItems={navigationItems} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Switch>
            <Route exact path="/" component={AsyncHomeContainer} />
            <Route exact path="/todos" component={AsyncTodoListContainer} />
            <Route exact path="/page2" component={AsyncPageTwoContainer} />
            <Route exact path="/page3" component={AsyncPageThreeContainer} />
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
