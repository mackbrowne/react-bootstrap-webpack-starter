import React, { useEffect, useState } from 'react';
import { Container, Col, Fade, Navbar } from 'react-bootstrap';

import { Title, TitleLabel, CenterRow } from './App.style.js';

import AddSwear from './utils/AddSwear';
import useIdea from './hooks/useIdea';

export default function App() {
  const {
    data: { title, label },
    isLoading
  } = useIdea();

  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowFooter(true), 1500);
  }, [isLoading]);

  const clean = window.location.pathname === '/clean';
  return (
    <>
      <Container>
        <CenterRow>
          <Fade in={!isLoading}>
            <Col>
              <Title>
                {clean ? (
                  title
                ) : (
                  <AddSwear sentence={title} swear={'fucking'} />
                )}
              </Title>
              <TitleLabel>{label}</TitleLabel>
            </Col>
          </Fade>
        </CenterRow>
      </Container>

      <Fade in={showFooter}>
        <Navbar fixed="bottom">
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              {clean ? (
                <a href="/" style={{ color: '#da0404' }}>
                  Dirty Version
                </a>
              ) : (
                <a href="/clean">Clean Version</a>
              )}
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
      </Fade>
    </>
  );
}
