// Framework
import React from 'react';

// Components
import { Container, Row, Col } from 'react-bootstrap';

/**
 * Page 1page for the app!
 *
 * @param {Object} props All the properties passed to the React Component.
 * @returns {StatelessComponent} Stateless functional React component.
 */
export default function PageThree() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <p>Page 3</p>
        </Col>
      </Row>
    </Container>
  );
}
