import React from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import { CustomModal } from './App.style';

export default function App() {
  return (
    <Container className="px-md-0 py-5">
      <Row>
        <Col>
          <CustomModal>
            <Modal.Header closeButton>
              <Modal.Title>Demo Modal</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <p>...sooo styled</p>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="primary">Close</Button>
              <Button variant="secondary">Save changes</Button>
            </Modal.Footer>
          </CustomModal>
        </Col>
      </Row>
    </Container>
  );
}
