// Framework
import React from 'react';

// Components
import {
  Container,
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';

import { LoginRow, LoginButton } from './Login.style';

/**
 * Login
 *
 * @param {Object} props All the properties passed to the React Component.
 * @returns {StatelessComponent} Stateless functional React component.
 */
const Login = props => (
  <Container fluid>
    <LoginRow className="align-items-center">
      <Col md="3" />
      <Col md="6" xs="12">
        <Form>
          <Row className="align-items-center">
            <Col lg="2" xs="3">
              <span>Name:</span>
            </Col>
            <Col lg="7" xs="9">
              <Input type="name" name="name" placeholder="Enter Name" />
            </Col>
            <Col lg="3" xs="12">
              <LoginButton color="primary" block>
                Login
              </LoginButton>
            </Col>
          </Row>
        </Form>
      </Col>
      <Col md="3" />
    </LoginRow>
  </Container>
);

export default Login;
