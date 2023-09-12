import React from 'react';
import { Button, Modal } from 'react-bootstrap';

export const Home = () => {
  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>WET Access</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>WET would like to access your location</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}