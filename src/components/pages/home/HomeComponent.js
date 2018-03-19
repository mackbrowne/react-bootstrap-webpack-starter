// Framework
import React from 'react';

// Components
import { Container, Row, Col } from 'reactstrap';

import { BlueButton } from './StyledButton.style';

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
  </Container>
);

export default Home;
