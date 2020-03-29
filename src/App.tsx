import React from 'react';
import { Container, Col, Fade } from 'react-bootstrap';

import './App.css';
import { Title, TitleLabel, CenterRow } from './App.style.js';

import swear from './utils/swear';
import useIdea from './utils/useIdea';

export default function App() {
  const {
    data: { title, label },
    isLoading
  } = useIdea();

  return (
    <Container>
      <CenterRow>
        <Fade in={!isLoading}>
          <Col>
            <Title>{swear(title)}</Title>
            <TitleLabel>{label}</TitleLabel>
          </Col>
        </Fade>
      </CenterRow>
    </Container>
  );
}
