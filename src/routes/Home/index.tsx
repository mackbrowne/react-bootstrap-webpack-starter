import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { Container, Col, Fade, Navbar, Nav } from 'react-bootstrap';

import { H1, H2, Row } from '../../App.style';

import AddSwear from './utils/AddSwear';
import useIdea from './hooks/useIdea';
import CensoredToggle from './utils/CensoredToggle';

export default function Home() {
  const {
    data: { title, label },
    isLoading
  } = useIdea();
  const { clean: censored } = useRouteMatch().params;

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
              <H2>{label}</H2>
            </Col>
          </Fade>
        </Row>
      </Container>
      <Fade in={showFooter}>
        <Navbar fixed="bottom">
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <CensoredToggle censored={censored} />
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Fade>
    </>
  );
}
