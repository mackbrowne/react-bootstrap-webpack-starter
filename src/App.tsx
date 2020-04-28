import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import CoverLetter from './CoverLetter';
import Resume from './Resume';
import { Container, Row, Col } from 'react-bootstrap';
import { Title, TitleLabel } from './App.style';

export default function App() {
  return (
    <Container className="px-md-0 py-5">
      <Row>
        <Col>
          <Row className="d-flex justify-content-between pr-5">
            <Col as={Title} md="auto">
              Mackenzie Browne
            </Col>
            <Col as={TitleLabel} md="auto">
              Full Stack and Mobile Developer
            </Col>
            <Col as={TitleLabel} md="auto">
              Amsterdam
            </Col>
          </Row>
        </Col>
      </Row>
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
    </Container>
  );
}
