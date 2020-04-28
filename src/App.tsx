import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import CoverLetter from './CoverLetter';
import Resume from './Resume';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/cv" component={CoverLetter} />
        <Route
          exact
          path="/resume"
          component={() => {
            window.location.replace('/resume.pdf');
            return null;
          }}
        />
        <Route exact path="/" component={Resume} />
      </Switch>
    </Router>
  );
}
