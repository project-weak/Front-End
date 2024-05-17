import React, { useState } from 'react';
import { Card as BootstrapCard, Button, Col } from 'react-bootstrap';
import $Modal from '../Modal/Modal';

function Cards(props) {
    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

    return (
        <>
            <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
                <BootstrapCard className="bg-dark text-light h-100">
                    <BootstrapCard.Img variant="top" src={props.data.albumCover} />
                    <BootstrapCard.Body className="d-flex flex-column">
                        <BootstrapCard.Title>{props.data.songName}</BootstrapCard.Title>
                        <BootstrapCard.Text>{props.data.artistName}</BootstrapCard.Text>
                        <div className="mt-auto d-flex justify-content-between">
                            <Button variant="primary" className="mr-1 flex-grow-1" onClick={handleShowModal}>Play</Button>
                            <Button variant="success" className="mx-1 flex-grow-1">Like</Button>
                            <Button variant="warning" className="ml-1 flex-grow-1">Add</Button>
                        </div>
                    </BootstrapCard.Body>
                </BootstrapCard>
            </Col>
            <$Modal handleCloseModal={handleCloseModal} showModal={showModal}/>

            
        </>
    );
}

export default Cards;
