// Framework
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

/**
 * Private Route Component.  Redirects if the user is not logged in
 *
 * @param {Object} props All the properties passed to the React Component.
 * @returns {Element} Stateless functional React component.
 */
const PublicRouteComponent = ({
  component: Component,
  isLoggedIn = false,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      isLoggedIn ? (
        <Redirect to={{ pathname: '/' }} />
      ) : (
        <Component {...props} />
      )
    }
  />
);

export default PublicRouteComponent;
