import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Container, Col, Form, Button, Fade } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { firestore, auth } from 'firebase/app';
import { useAuthState } from 'react-firebase-hooks/auth';
import slugify from 'slugify';
import { titleCase } from 'title-case';

import { H1, MainRow } from '../App.style';
import AddSwear from '../components/AddSwear';
import useClean from '../hooks/useClean';
import { RBRef } from '../App.types';

const forbiddenRoutes = slug =>
  ['sign-up', 'login', 'create', 'about'].includes(slug);

export default function Create() {
  const [user, userLoading] = useAuthState(auth());
  const { replace: replaceHistory, push: pushHistory } = useHistory();
  const { search } = useLocation();
  useEffect(() => {
    !user && !userLoading && replaceHistory(`/sign-up${search}`);
  }, [replaceHistory, search, user, userLoading]);
  const censored = useClean();

  const { handleSubmit, register, errors } = useForm();
  const formRef = () => register() as RBRef;
  const requiredFormRef = () =>
    register({
      required: 'Required'
    }) as RBRef;

  const createIdea = handleSubmit(async ({ title, description, url }) => {
    try {
      const ideasCollection = firestore().collection('ideas');

      let slug = slugify(title).toLowerCase();
      let unique = false;
      let modifier = 0;
      do {
        let result = await ideasCollection
          .where('slug', '==', slug)
          .limit(1)
          .get();
        if (result.empty && !forbiddenRoutes(slug)) {
          unique = true;
        } else {
          modifier++;
          slug = `${slug}-${modifier}`;
        }
      } while (!unique);

      await ideasCollection.add({
        title: titleCase(title),
        description,
        url,
        timestamp: new Date(),
        user: user.uid,
        slug,
        approved: false
      });
      pushHistory(`/${slug}${search}`);
    } catch ({ message }) {
      console.error(message);
    }
  });

  return (
    <Container>
      <Fade in={!!user}>
        <div>
          <MainRow>
            <Col>
              <H1>
                <AddSwear
                  sentence={'Add your own idea'}
                  swear={'fucking'}
                  censored={censored}
                />
              </H1>
              <Form onSubmit={createIdea}>
                <Form.Group controlId="createIdea">
                  <Form.Label>Idea</Form.Label>
                  <Form.Control
                    name="title"
                    placeholder="Enter Something..."
                    required
                    type="text"
                    ref={requiredFormRef()}
                  />
                  <Form.Text className="text-muted">
                    'Ride A Bike', 'Bake cakes' (No Swearing!)
                  </Form.Text>
                </Form.Group>
                <Form.Group controlId="createDescription">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    name="description"
                    placeholder="Explain it more..."
                    required
                    type="text"
                    ref={requiredFormRef()}
                  />
                </Form.Group>
                <Form.Group controlId="createUrl">
                  <Form.Label>Url (optional)</Form.Label>
                  <Form.Control
                    name="url"
                    placeholder="https://"
                    type="url"
                    ref={formRef()}
                  />
                  <Form.Text className="text-muted">
                    Will open in a new tab
                  </Form.Text>
                </Form.Group>
                <Form.Group controlId="createErrors">
                  <Form.Control.Feedback type="invalid">
                    {JSON.stringify(errors)}
                  </Form.Control.Feedback>
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
          </MainRow>
        </div>
      </Fade>
    </Container>
  );
}
