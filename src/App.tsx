import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Create from './Create';
import useAnalytics from './hooks/useAnalytics';
import Footer from './components/Footer';

export default function App() {
  useAnalytics();
  return (
    <>
      <Switch>
        <Route exact path="/create" component={Create} />
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </>
  );
}
