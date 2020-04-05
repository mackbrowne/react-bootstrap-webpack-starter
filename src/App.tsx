import React, { useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { analytics } from 'firebase/app';
import Home from './Home';
import Create from './Create';

function usePageViews() {
  const { pathname: page_location } = useLocation();

  useEffect(
    () =>
      analytics().logEvent('page_view', {
        page_location
      }),
    [page_location]
  );
}

export default function App() {
  usePageViews();
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      //todo figure out another way to do clean globally
      <Route exact path="/create" component={Create} />
    </Switch>
  );
}
