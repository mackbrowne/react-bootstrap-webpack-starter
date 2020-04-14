import React from 'react';
import { Switch, Route } from 'react-router-dom';
import IdeaProvider from './context/Idea';
import useAnalytics from './hooks/useAnalytics';
import Create from './views/Create';
import Auth from './views/Auth';
import About from './views/About';
import Home from './views/Home';
import Footer from './components/Footer';

export default function App() {
  useAnalytics();
  return (
    <IdeaProvider>
      <Switch>
        <Route exact path="/create" component={Create} />
        <Route exact path="/login" component={Auth} />
        <Route exact path="/sign-up" component={Auth} />
        <Route exact path="/about" component={About} />
        <Route exact path="/" component={Home} />
        <Route path="/:slug" component={Home} />
      </Switch>
      <Footer />
    </IdeaProvider>
  );
}
