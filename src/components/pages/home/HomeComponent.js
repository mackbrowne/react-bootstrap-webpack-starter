// Framework
import React from 'react';

// Components
import { Container, Row, Col } from 'reactstrap';

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
        <p>Home</p>
      </Col>
    </Row>
  </Container>
);

export default Home;
