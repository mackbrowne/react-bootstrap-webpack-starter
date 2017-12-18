// Framework
import React from 'react';

// Components
import { Container, Row, Col } from 'reactstrap';

/**
 * Page 1page for the app!
 *
 * @param {Object} props All the properties passed to the React Component.
 * @returns {StatelessComponent} Stateless functional React component.
 */
const PostsComponent = props => (
  <Container fluid>
    <Row>
      <Col>
        <h1>Posts</h1>
      </Col>
    </Row>
  </Container>
);

export default PostsComponent;
