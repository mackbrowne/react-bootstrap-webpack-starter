// Framework
import React from 'react';

// Components
import {
  Alert,
  Button,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import { LoginContainer } from './Login.style';
/**
 * Homepage for the app!
 *
 * @param {Object} props All the properties passed to the React Component.
 * @returns {StatelessComponent} Stateless functional React component.
 */
const Login = ({ setInputValue, email, login, error, dismissError }) => (
  <LoginContainer fluid>
    <Row>
      <Col lg={{ size: 6, offset: 3 }} xs="12">
        <Form>
          <FormGroup row>
            <Label for="exampleEmail" lg="2" xs="3">
              Email
            </Label>
            <Col lg="7" xs="9">
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="with a placeholder"
                onChange={setInputValue}
              />
            </Col>
            <Col lg="3" xs="12" className="mt-2 mt-lg-0">
              <Button
                block
                type="submit"
                onClick={e => {
                  e.preventDefault();
                  login(email);
                }}
              >
                Login
              </Button>
            </Col>
          </FormGroup>
          <Alert color="danger" isOpen={error} toggle={dismissError}>
            {error}
          </Alert>
        </Form>
      </Col>
    </Row>
  </LoginContainer>
);

export default Login;
