// Framework
import React from 'react';

// Components
import { Container, Row, Col } from 'reactstrap';

import {
  BlueButton,
  RoundButton,
  RedButton,
  RotateButton,
  RotatingTitle,
  MonolithButton
} from './StyledButton.style';

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
        <BlueButton>Simple Button</BlueButton>
      </Col>
    </Row>
    <Row>
      <Col>
        <RoundButton>Rounded Button</RoundButton>
      </Col>
    </Row>
    <Row>
      <Col>
        <RedButton>Red, Rounded Button</RedButton>
      </Col>
    </Row>
    <Row>
      <Col>
        <RotateButton>Rotating....</RotateButton>
      </Col>
    </Row>
    <Row>
      <Col>
        <RotatingTitle>Rotating....</RotatingTitle>
      </Col>
    </Row>
    <Row>
      <Col>
        <MonolithButton rotate="true">Monolith</MonolithButton>
      </Col>
    </Row>
  </Container>
);

export default Home;
