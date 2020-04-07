import React, { useEffect, useState } from 'react';
import { Container, Col, Fade, Navbar, Nav } from 'react-bootstrap';

import { H1, H2, Row } from '../App.style';

import AddSwear from '../common/AddSwear';
import useIdea from '../common/hooks/useIdea';
import useClean from '../common/hooks/useClean';
import CensoredToggle from '../common/CensoredToggle';

export default function Home() {
  const {
    data: { title, description },
    isLoading
  } = useIdea();

  const censored = useClean();

  const [showFooter, setShowFooter] = useState(false);
  useEffect(() => {
    setTimeout(() => setShowFooter(true), censored ? 850 : 1500);
  }, [isLoading, censored]);

  return (
    <>
      <Container>
        <Row>
          <Fade in={!isLoading}>
            <Col>
              <H1>
                <AddSwear
                  sentence={title}
                  swear={'fucking'}
                  censored={censored}
                />
              </H1>
              <H2>{description}</H2>
            </Col>
          </Fade>
        </Row>
      </Container>
      <Fade in={showFooter}>
        <Navbar fixed="bottom">
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <CensoredToggle />
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Fade>
    </>
  );
}