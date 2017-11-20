// Framework
import React from 'react';

// Components
import { Container, Row, Col } from 'reactstrap';

/**
 * Page 1 page for the app!
 *
 * @param {Object} props All the properties passed to the React Component.
 * @returns {StatelessComponent} Stateless functional React component.
 */
const PageOne = props => (
  <Container fluid>
    <Row>
      <Col>
        <p>Page 1</p>
      </Col>
    </Row>
  </Container>
);

export default PageOne;
