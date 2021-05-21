import { Button, Container, Row, Col, Form } from 'react-bootstrap';
// import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

// import PageOne from './PageOne';
import React, { useRef } from 'react';
import { Headline, Message, Title } from './App.style';
import ReCAPTCHA from 'react-google-recaptcha';
import { useForm } from 'react-hook-form';
import firebase from 'firebase/app';

const { Group, Control, Text, Check } = Form;

const { REACT_APP_CAPTCHA_KEY: captchaKey } = process.env;

type formValues = {
  fullName: string;
  email: string;
  optIn: boolean;
  timeStamp: Date;
};

export default function App() {
  const reCapRef = useRef<ReCAPTCHA>();
  const { register, handleSubmit } = useForm<formValues>();

  const signUp = handleSubmit(async ({ fullName, email, optIn }) => {
    try {
      const token = await reCapRef.current.executeAsync();
      console.log('token:', token);
      reCapRef.current.reset();

      const peopleCollection = firebase.firestore().collection('people');
      if (token) {
        await peopleCollection.add({
          fullName,
          email,
          optIn,
          timestamp: new Date(),
          token,
        });

        alert('Thank You!');
      } else {
        alert(
          'Try Again! You seem like a robot.. prove that you are human, by acting like one'
        );
      }
    } catch ({ message }) {
      console.error(message);
    }
  });

  return (
    <Container fluid="sm" className="align-middle">
      <ReCAPTCHA sitekey={captchaKey} size="invisible" ref={reCapRef} />
      <Row className=" vh-100 d-flex py-5 align-items-center justify-content-md-center overflow-auto">
        <Col className="text-center">
          <Title>Hi, let’s welcome Boris!</Title>
          <Message>
            <Headline>
              Boris Volynov is the last living member of humanity’s first group
              of space travelers.
            </Headline>
            <Headline>
              As we step out of our cosmic cradle, it is important to remember
              the pioneers who took the first steps. And their sacrifices along
              the way.
            </Headline>
            <Headline>
              Boris is one of these pioneers. And he has one heck of a story.
            </Headline>
            <Headline>
              We would like to interview him for posterity. To preserve and
              honor his legacy.
            </Headline>

            <Form onSubmit={signUp} className="mt-4">
              <Group controlId="formBasicInfo">
                <Form.Control
                  size="lg"
                  placeholder="Full Name"
                  {...register('fullName', { required: true })}
                />
              </Group>
              <Group controlId="formBasicEmail">
                <Control
                  size="lg"
                  type="email"
                  placeholder="Enter email"
                  {...register('email')}
                />
                <Text className="text-muted">
                  We&apos;ll never share your email with anyone else.
                </Text>
              </Group>
              {/* <Group controlId="formBasicCheckbox">
                <Check
                  type="checkbox"
                  label="Check me out"
                  {...register('optIn')}
                />
              </Group> */}
              <Button size="lg" variant="dark" type="submit" className="mt-4" block>
                Submit
              </Button>
            </Form>
          </Message>
        </Col>
      </Row>
      {/* <Router>
        <Switch>
          <Route exact path="/" component={PageOne} />
        </Switch>
      </Router> */}
    </Container>
  );
}
