import React, { useEffect, useState, useContext, useCallback } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Container, Col, Fade, Button } from 'react-bootstrap';
import wait from 'waait';

import { IdeaContext } from '../context/Idea';
import AddSwear from '../components/AddSwear';
import useClean from '../hooks/useClean';

import { H1, H2, H3, MainRow, DELAY, QUICK_DELAY } from '../App.style';

export default function Home() {
  const {
    data: { title, description, url },
    getIdea
  } = useContext(IdeaContext);

  const { replace: replaceHistory } = useHistory();
  const { slug: slugParam } = useParams();
  const censored = useClean();
  const CENSOR_DELAY = censored ? 0 : DELAY;

  const [showTitle, setShowTitle] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [showRandom, setShowRandom] = useState(false);

  const showIdea = useCallback(async () => {
    await getIdea(slugParam);
    setShowTitle(true);
    await wait(CENSOR_DELAY);
    await wait(DELAY);
    setShowDescription(true);
    await wait(DELAY);
    setShowRandom(true);
  }, [CENSOR_DELAY, getIdea, slugParam]);

  const clickRefresh = useCallback(async () => {
    await wait();
    setShowRandom(false);
    await wait(QUICK_DELAY);
    setShowDescription(false);
    await wait(QUICK_DELAY);
    setShowTitle(false);
    await showIdea();
  }, [showIdea]);

  useEffect(() => {
    showIdea();
    replaceHistory('/');
  }, [replaceHistory, showIdea]);

  return (
    <Container>
      <MainRow>
        <Col>
          <Fade in={showTitle} appear>
            <div>
              <H1>
                <a
                  href={url ? url : ''}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  <AddSwear
                    sentence={title}
                    swear={'fucking'}
                    censored={censored}
                  />
                </a>
              </H1>
            </div>
          </Fade>
          <Fade in={showDescription} appear>
            <div>
              <H2>
                <a
                  href={url ? url : ''}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  {description}
                </a>
              </H2>
            </div>
          </Fade>
          <Fade in={showRandom} appear>
            <div>
              <Button
                variant="link"
                className="float-right text-decoration-none"
                disabled={!showRandom}
                onClick={clickRefresh}
              >
                <H3>...Something Else?</H3>
              </Button>
            </div>
          </Fade>
        </Col>
      </MainRow>
    </Container>
  );
}
