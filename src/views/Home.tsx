import React, { useEffect, useState, useContext, useCallback } from 'react';
import { useParams, useHistory, useLocation } from 'react-router-dom';
import { Container, Col, Fade, Button } from 'react-bootstrap';
import wait from 'waait';

import { IdeaContext } from '../context/Idea';
import AddSwear from '../components/AddSwear';
import useClean from '../hooks/useClean';

import { H1, H2, H3, MainRow, DELAY, QUICK_DELAY } from '../App.style';

export default function Home() {
  const { title, description, url, getIdea, resetIdea, isLoading } = useContext(
    IdeaContext
  );

  const { replace: replaceHistory } = useHistory();
  const { search } = useLocation();
  const { slug: slugParam } = useParams();
  const censored = useClean();
  const CENSOR_DELAY = censored ? 0 : DELAY;

  const [showTitle, setShowTitle] = useState(false);
  const [showSwear, setShowSwear] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [showRandom, setShowRandom] = useState(false);

  const showIdea = useCallback(async () => {
    setShowTitle(true);
    await wait(CENSOR_DELAY);
    setShowSwear(true);
    await wait(DELAY);
    setShowDescription(true);
    await wait(DELAY);
    setShowRandom(true);
  }, [CENSOR_DELAY]);

  const clickRefresh = useCallback(async () => {
    setShowRandom(false);
    await wait(QUICK_DELAY);
    setShowDescription(false);
    await wait(QUICK_DELAY);
    setShowTitle(false);
    if (slugParam) {
      replaceHistory(`/${search}`);
    } else {
      await getIdea();
    }
  }, [getIdea, replaceHistory, search, slugParam]);

  useEffect(() => {
    getIdea(slugParam);

    return resetIdea;
  }, [getIdea, slugParam, resetIdea]);

  useEffect(() => {
    !isLoading && showIdea();
  }, [showIdea, isLoading]);

  return (
    <Container>
      <MainRow>
        <Col>
          <Fade in={showTitle}>
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
                    censored={!showSwear || censored}
                  />
                </a>
              </H1>
            </div>
          </Fade>
          <Fade in={showDescription}>
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
          <Fade in={showRandom}>
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
