import React, { useState, useEffect } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {
  Container,
  Col,
  Form,
  Button,
  Collapse,
  Alert,
  Fade
} from 'react-bootstrap';
import { auth } from 'firebase/app';
import { useAuthState } from 'react-firebase-hooks/auth';

import { H1, MainRow, TextTransition } from '../App.style';
import AddSwear from '../components/AddSwear';
import useClean from '../hooks/useClean';
import { RBRef } from '../App.types';

export default function Create() {
  const { handleSubmit, register, errors, reset } = useForm();
  const [error, setError] = useState(null);

  const censored = useClean();
  const { pathname, search } = useLocation();
  useEffect(() => {
    setError(null);
  }, [pathname, reset]);

  const [user, userLoading] = useAuthState(auth());
  const { replace: replaceHistory } = useHistory();
  useEffect(() => {
    user && replaceHistory(`/create${search}`);
  }, [replaceHistory, search, user]);

  const { isSignUp, submitButton, altButton, altUrl, authMethod } =
    pathname === '/sign-up'
      ? {
          isSignUp: true,
          submitButton: 'Sign Up',
          altButton: 'Already Have An Account?',
          altUrl: 'login',
          authMethod: 'createUserWithEmailAndPassword'
        }
      : {
          isSignUp: false,
          submitButton: 'Login',
          altButton: "Don't have an account yet?",
          altUrl: 'sign-up',
          authMethod: 'signInWithEmailAndPassword'
        };

  const submit = handleSubmit(
    async ({ email, password, passwordAgain, termsAgreed = true }) => {
      try {
        if (isSignUp) {
          if (password !== passwordAgain) throw Error('Passwords do not match');
          // if (!termsAgreed) throw Error('Must agree to terms');
        }
        await auth()[authMethod](email, password);
      } catch ({ message }) {
        setError(message);
      }
    }
  );

  return (
    <Container>
      <Fade appear in={!userLoading}>
        <div>
          <MainRow>
            <Col>
              <H1>
                <TextTransition text={isSignUp ? 'Create' : 'Sign into'} />
                <AddSwear
                  sentence={` your account`}
                  swear={'fucking'}
                  censored={censored}
                />
              </H1>
              <Form onSubmit={submit}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    name="email"
                    required
                    type="email"
                    placeholder="Enter email"
                    ref={
                      register({
                        required: 'Required'
                      }) as RBRef
                    }
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    name="password"
                    required
                    ref={
                      register({
                        required: 'Required'
                      }) as RBRef
                    }
                    type="password"
                    placeholder="Password"
                  />
                </Form.Group>

                <Collapse in={isSignUp}>
                  <div>
                    <Form.Group controlId="formBasicPasswordAgain">
                      <Form.Label>Password Again</Form.Label>
                      <Form.Control
                        name="passwordAgain"
                        ref={register() as RBRef}
                        type="password"
                        placeholder="Password Again"
                      />
                    </Form.Group>
                    {/* <Form.Group controlId="formBasicCheckbox">
                      <Form.Label>
                        Agree to{' '}
                        <Link to="/terms-and-conditions">
                          Terms and Conditions
                        </Link>
                      </Form.Label>{' '}
                      <Form.Check
                        name="termsAgreed"
                        ref={register() as RBRef}
                        type="checkbox"
                        inline
                      />
                    </Form.Group> */}
                  </div>
                </Collapse>
                <Button
                  block
                  variant="primary"
                  type="submit"
                  disabled={!!errors.length}
                >
                  {submitButton}
                </Button>
                <Button
                  as={Link}
                  to={`/${altUrl}${search}`}
                  block
                  variant="link"
                >
                  {altButton}
                </Button>
                {error && <Alert variant="primary">{error}</Alert>}
              </Form>
            </Col>
          </MainRow>
        </div>
      </Fade>
    </Container>
  );
}
