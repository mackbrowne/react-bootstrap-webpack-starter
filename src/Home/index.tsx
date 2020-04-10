import React, { useEffect, useState } from 'react';
import { Container, Col, Fade } from 'react-bootstrap';

import { H1, H2, Row } from '../App.style';

import AddSwear from '../components/AddSwear';
import useIdea from '../hooks/useIdea';
import useClean from '../hooks/useClean';

export default function Home() {
  const {
    data: { title, description },
    isLoading
  } = useIdea();

  const censored = useClean();

  const [showTitle, setShowTitle] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  useEffect(() => {
    setTimeout(() => setShowTitle(true), 800);
    setTimeout(() => setShowDescription(true), censored ? 1600 : 2400);
  }, [isLoading, censored]);

  return (
    <Container>
      <Row>
        <Col>
          <Fade in={showTitle}>
            <div>
              <H1>
                <AddSwear
                  sentence={title}
                  swear={'fucking'}
                  censored={censored}
                />
              </H1>
            </div>
          </Fade>
          <Fade in={showDescription}>
            <div>
              <H2>{description}</H2>
            </div>
          </Fade>
        </Col>
      </Row>
    </Container>
  );
}
