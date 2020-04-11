import React, { useEffect, useState, useContext } from 'react';
import { Container, Col, Fade } from 'react-bootstrap';
import wait from 'waait';

import { IdeaContext } from '../context/Idea';
import AddSwear from '../components/AddSwear';
import useClean from '../hooks/useClean';

import { H1, H2, MainRow } from '../App.style';

export default function Home() {
  // const {
  //   data: { title, description, url },
  //   isLoading
  // } = useIdea();
  const {
    data: { title, description, url },
    isLoading
  } = useContext(IdeaContext);

  const censored = useClean();

  const [showTitle, setShowTitle] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  useEffect(() => {
    (async () => {
      await wait(800);
      setShowTitle(true);
      await wait(censored ? 800 : 1600);
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
