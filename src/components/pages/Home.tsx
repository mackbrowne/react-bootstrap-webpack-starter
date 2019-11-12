// Framework
import React from 'react';

// Components
import { Container, Row, Col } from 'react-bootstrap';

/**
 * Homepage for the app!
 *
 * @param {Object} props All the properties passed to the React Component.
 * @returns {StatelessComponent} Stateless functional React component.
 */
export default function Home() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <p>Home</p>
        </Col>
      </Row>
    </Container>
  );
}
