// @flow
// Framework
import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';

// Components
import { Row, Col } from 'reactstrap';

import PrivateRoute from './common/PrivateRoute/PrivateRouteContainer';
import PublicRoute from './common/PublicRoute/PublicRouteContainer';
import LoadingComponent from './common/LoadingComponent';

import { AppContainer } from './AppLayout.style';

const AsyncNavigationContainer = Loadable({
  loader: () => import('./common/navigation/NavigationContainer'),
  loading: LoadingComponent
});
const AsyncLoginContainer = Loadable({
  loader: () => import('./pages/login/LoginContainer'),
  loading: LoadingComponent
});
const AsyncTodoListContainer = Loadable({
  loader: () => import('./pages/todos/TodoListContainer'),
  loading: LoadingComponent
});
const AsyncAlbumsContainer = Loadable({
  loader: () => import('./pages/albums/AlbumsContainer'),
  loading: LoadingComponent
});
const AsyncPostsContainer = Loadable({
  loader: () => import('./pages/posts/PostsContainer'),
  loading: LoadingComponent
});
const AsyncNotFound = Loadable({
  loader: () => import('./pages/NotFound'),
  loading: LoadingComponent
});

/**
 * Main rendering entry point for the app.
 *
 * @returns {Element} Stateless functional React component.
 */
const AppLayout = ({ children }) => (
  <div className="App">
    <AppContainer>
      <AsyncNavigationContainer />
      <Row>
        <Col>
          <Switch>
            <Redirect exact from="/" to="/todos" />
            <PublicRoute exact path="/login" component={AsyncLoginContainer} />
            <PrivateRoute
              exact
              path="/todos"
              component={AsyncTodoListContainer}
            />
            <PrivateRoute
              exact
              path="/albums"
              component={AsyncAlbumsContainer}
            />
            <PrivateRoute exact path="/posts" component={AsyncPostsContainer} />
            <PrivateRoute path="*" component={AsyncNotFound} />
          </Switch>
        </Col>
      </Row>
      <Row>
        <Col>
          <footer className="py-1 text-center">
            <p>
              Created by:{' '}
              <a href="https://github.com/mackbrowne">Mackenzie Browne</a>
            </p>
          </footer>
        </Col>
      </Row>
    </AppContainer>
  </div>
);

export default AppLayout;
