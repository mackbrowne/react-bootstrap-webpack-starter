// Framework
import React from "react";
import { Switch, Route } from "react-router-dom";

// Components
import { Container, Row, Col } from "reactstrap";

import logo from "./../img/logo.svg";

import NavigationContainer from "./shared/navigation/NavigationContainer";
import HomeContainer from "./pages/home/HomeContainer";
import PageOneContainer from "./pages/one/PageOneContainer";
import PageTwoContainer from "./pages/two/PageTwoContainer";
import PageThreeContainer from "./pages/three/PageThreeContainer";
import NotFound from "./pages/NotFound";

import "./AppLayout.css";

const navigationItems = [
  { label: "Home", path: "/" },
  { label: "Page 1", path: "page1" },
  { label: "Page 2", path: "page2" },
  { label: "Page 3", path: "page3" }
];

/**
 * Main rendering entry point for the app.
 *
 * @returns {Element} Stateless functional React component.
 */
const AppLayout = ({ children }) => (
  <div className="App">
    <Container>
      <Row className="bg-faded">
        <Col xs={1}>
          <img src={logo} alt="logo" />
        </Col>
        <Col>
          <NavigationContainer navigationItems={navigationItems} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Switch>
            <Route exact path="/" component={HomeContainer} />
            <Route exact path="/page1" component={PageOneContainer} />
            <Route exact path="/page2" component={PageTwoContainer} />
            <Route exact path="/page3" component={PageThreeContainer} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Col>
      </Row>
      <Row>
        <Col>
          <footer className="py-1 text-center">
            <p>
              Created by: <a href="https://mackbrowne.com/">Mack Browne</a> and
              adapted from{" "}
              <a href="https://github.com/mackbrowne/beehive">Beehive</a>
            </p>
          </footer>
        </Col>
      </Row>
    </Container>
  </div>
);

export default AppLayout;
