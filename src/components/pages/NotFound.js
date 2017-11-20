// Framework
import React from 'react';

// Components
import { Container, Row, Col } from 'reactstrap';

const NotFound = () => (
  <Container className="not-found">
    <Row>
      <Col>
        <p>
          <strong>Error [404]</strong>: {window.location.pathname} does not
          exist.
        </p>
      </Col>
    </Row>
  </Container>
);

export default NotFound;
