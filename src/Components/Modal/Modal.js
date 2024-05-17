import React from 'react';
import { Modal as BootstrapModal, Button } from 'react-bootstrap';
import SoundPlayer from '../SoundPlayer/SoundPlayer';
import './Modal.css'; 

function $Modal(props) {
    return (
        <BootstrapModal
            show={props.showModal}
            onHide={props.handleCloseModal}
            centered
            className="custom-modal"
        >
            <BootstrapModal.Header closeButton>
                <BootstrapModal.Title>Player</BootstrapModal.Title>
            </BootstrapModal.Header>
            <BootstrapModal.Body>
                <SoundPlayer />
            </BootstrapModal.Body>
            <BootstrapModal.Footer>
                <Button variant="secondary" onClick={props.handleCloseModal}>Close</Button>
            </BootstrapModal.Footer>
        </BootstrapModal>
    );
}

export default $Modal;
