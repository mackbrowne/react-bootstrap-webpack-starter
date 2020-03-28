import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import swear from './utils/swear';

// import logo from './logo.svg';
import './App.css';
import { Title, TitleLabel } from './App.style.js';

import ideas from './ideas.json';

const { title, label } = ideas[Math.floor(Math.random() * ideas.length)];

export default function App() {
  return (
    <Container>
      <Row className="vh-100 d-flex align-items-center">
        <Col>
          <Title>{swear(title)}</Title>
          <TitleLabel>{label}</TitleLabel>
        </Col>
      </Row>
    </Container>
  );
}
