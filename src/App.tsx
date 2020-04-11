import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Create from './views/Create';
import Auth from './views/Auth';
import Home from './views/Home';
import useAnalytics from './hooks/useAnalytics';
import Footer from './components/Footer';
import IdeaProvider from './context/Idea';

export default function App() {
  useAnalytics();
  return (
    <IdeaProvider>
      <Switch>
        <Route exact path="/create" component={Create} />
        <Route exact path="/login" component={Auth} />
        <Route exact path="/sign-up" component={Auth} />
        <Route exact path="/" component={Home} />
        <Route path="/:slug" component={Home} />
      </Switch>
      <Footer />
    </IdeaProvider>
  );
}
