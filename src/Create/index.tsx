import React, { useEffect, useState } from 'react';
import { Container, Col, Fade, Navbar, Nav } from 'react-bootstrap';

import { H1, H2, Row } from '../App.style';
import AddSwear from '../common/AddSwear';
import CensoredToggle from '../common/CensoredToggle';
import useClean from '../common/hooks/useClean';

export default function Home() {
  const censored = useClean();

  const [showFooter, setShowFooter] = useState(false);
  useEffect(() => {
    setTimeout(() => setShowFooter(true), censored ? 850 : 1500);
  }, [censored]);

  return (
    <>
      <Container>
        <Row>
          <Fade in={true}>
            <Col>
              <H1>
                <AddSwear
                  sentence={'Add your own idea'}
                  swear={'fucking'}
                  censored={censored}
                />
              </H1>
              <H2>Input Label Goes here</H2>
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
