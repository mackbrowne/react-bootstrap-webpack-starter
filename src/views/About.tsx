import React, { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import { Container, Col, Fade } from 'react-bootstrap';
import wait from 'waait';

import AddSwear from '../components/AddSwear';
import useClean from '../hooks/useClean';

import { H1, H2, MainRow, DELAY } from '../App.style';

const NewTab = styled.a.attrs({
  target: '_blank',
  rel: 'noopener noreferrer'
})``;

export default function About() {
  const censored = useClean();
  const CENSOR_DELAY = censored ? 0 : DELAY;

  const [showTitle, setShowTitle] = useState(false);
  const [showSwear, setShowSwear] = useState(false);
  const [showDescription, setShowDescription] = useState(false);

  const showContent = useCallback(async () => {
    setShowTitle(true);
    await wait(CENSOR_DELAY);
    setShowSwear(true);
    await wait(DELAY);
    setShowDescription(true);
  }, [CENSOR_DELAY]);

  useEffect(() => {
    showContent();
  }, [showContent]);

  return (
    <Container>
      <MainRow>
        <Col>
          <Fade in={showTitle}>
            <div>
              <H1>
                <AddSwear
                  sentence="Who Made this Website"
                  swear={'fucking'}
                  censored={!showSwear || censored}
                />
                ?
              </H1>
            </div>
          </Fade>
          <Fade in={showDescription}>
            <div>
              <H2>
                <NewTab href="https://mackbrowne.com">
                  This website was made by Mackenzie Browne
                </NewTab>
              </H2>
              <H2>
                <NewTab href="http://www.whatthefuckshouldimakefordinner.com/">
                  Inspiration
                </NewTab>
              </H2>
              <p>I made this website while bored in quarantine.</p>
              <p>
                I thought{' '}
                <span className="font-italic">
                  'adding swear words to things'
                </span>{' '}
                would be a great use of{' '}
                <NewTab href="https://www.npmjs.com/package/compromise">
                  Natural Language Processing
                </NewTab>
                .
              </p>
              <H2>Special Thanks</H2>
              <p>My Partner</p>
              <p>My Family and Friends</p>
              <p>
                <NewTab href="https://www.instagram.com/winstonreviews">
                  My Ruthless Project Manager
                </NewTab>
              </p>
              <H2>
                <NewTab href="mailto:info@mackbrowne.com">Inquiries</NewTab>
              </H2>
            </div>
          </Fade>
        </Col>
      </MainRow>
    </Container>
  );
}
