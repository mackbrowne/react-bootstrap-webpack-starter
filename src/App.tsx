import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Create from './views/Create';
import Auth from './views/Auth';
import Home from './views/Home';
import useAnalytics from './hooks/useAnalytics';
import Footer from './components/Footer';

export default function App() {
  useAnalytics();
  return (
    <>
      <Switch>
        <Route exact path="/create" component={Create} />
        <Route exact path="/login" component={Auth} />
        <Route exact path="/sign-up" component={Auth} />
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </>
  );
}
