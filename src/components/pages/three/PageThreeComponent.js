// Framework
import React from "react";

// Components
import { Container, Row, Col } from "reactstrap";

/**
 * Page 1page for the app!
 *
 * @param {Object} props All the properties passed to the React Component.
 * @returns {StatelessComponent} Stateless functional React component.
 */
const PageThree = props => (
  <Container fluid>
    <Row>
      <Col>
        <p>Page 3</p>
      </Col>
    </Row>
  </Container>
);

export default PageThree;
