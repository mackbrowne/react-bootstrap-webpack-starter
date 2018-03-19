// Framework
import React from 'react';

// Components
import { Container, Row, Col } from 'reactstrap';

import { RotatingTitle, Button } from './StyledButton.style';

/**
 * Homepage for the app!
 *
 * @param {Object} props All the properties passed to the React Component.
 * @returns {StatelessComponent} Stateless functional React component.
 */
const Home = props => (
  <Container fluid>
    <Row>
      <Col>
        <Button>Simple Button</Button>
      </Col>
    </Row>
    <Row>
      <Col>
        <Button round="true">Rounded Button</Button>
      </Col>
    </Row>
    <Row>
      <Col>
        <Button background="red" color="white" round="true">
          Red, Rounded Button
        </Button>
      </Col>
    </Row>
    <Row>
      <Col>
        <Button rotate="true">Rotating....</Button>
      </Col>
    </Row>
    <Row>
      <Col>
        <RotatingTitle>Rotating....</RotatingTitle>
      </Col>
    </Row>
    <Row>
      <Col>
        <Button rotate="true" color="white" background="red" round="true">
          Monolith
        </Button>
      </Col>
    </Row>
  </Container>
);

export default Home;
