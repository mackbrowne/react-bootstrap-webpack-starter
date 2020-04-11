import React, { useEffect, useState } from 'react';
import { Container, Col, Fade } from 'react-bootstrap';

import { H1, H2, MainRow } from '../App.style';

import AddSwear from '../components/AddSwear';
import useIdea from '../hooks/useIdea';
import useClean from '../hooks/useClean';

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default function Home() {
  const {
    data: { title, description, url },
    isLoading
  } = useIdea();

  const censored = useClean();

  const [showTitle, setShowTitle] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  useEffect(() => {
    (async () => {
      await timeout(800);
      setShowTitle(true);
      await timeout(censored ? 800 : 1600);
      setShowDescription(true);
    })();
  }, [isLoading, censored]);

  return (
    <Container>
      <MainRow>
        <Col>
          <Fade in={showTitle}>
            <div>
              <a
                href={url ? url : ''}
                target="_blank"
                rel="noopener noreferrer"
              >
                <H1>
                  <AddSwear
                    sentence={title}
                    swear={'fucking'}
                    censored={censored}
                  />
                </H1>
              </a>
            </div>
          </Fade>
          <Fade in={showDescription}>
            <div>
              <H2>{description}</H2>
            </div>
          </Fade>
        </Col>
      </MainRow>
    </Container>
  );
}
