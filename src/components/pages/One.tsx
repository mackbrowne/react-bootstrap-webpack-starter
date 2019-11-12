// Framework
import React from 'react';

// Components
import { Container, Row, Col } from 'react-bootstrap';

/**
 * Page 1 page for the app!
 *
 * @param {Object} props All the properties passed to the React Component.
 * @returns {StatelessComponent} Stateless functional React component.
 */
export default function PageOne() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <p>Page 1</p>
        </Col>
      </Row>
    </Container>
  );
}
