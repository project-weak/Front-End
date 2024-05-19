import React, { useState } from 'react';
import { Card as BootstrapCard, Button, Col } from 'react-bootstrap';
import $Modal from '../Modal/Modal';
import PropTypes from 'prop-types';
import './Card.css'; // تأكد من أن هذا المسار صحيح

function Cards(props) {
    const data = props.data;
    
    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

    return (
        <>
            <Col>
                <BootstrapCard className="custom-card h-100">
                    <BootstrapCard.Img className="custom-card-img" variant="top" src={data.url_image} />
                    <BootstrapCard.Body className='d-flex flex-column'>
                        <BootstrapCard.Text className="custom-card-title">
                            {data.music_name}
                        </BootstrapCard.Text>
                        <BootstrapCard.Text className="custom-card-text">
                            {data.singer_name}
                        </BootstrapCard.Text>
                        <div className="mt-auto d-flex justify-content-between">
                            {props.location === 'library' ? (
                                <>
                                    <Button variant="primary" className="mr-1 flex-grow-1" onClick={handleShowModal}>Play</Button>
                                    <Button variant="danger" className="ml-1 flex-grow-1" onClick={props.deleteSong}>Delete</Button>
                                </>
                            ) : (
                                <>
                                    <Button variant="success" className="mx-1 flex-grow-1" onClick={props.addToLiked}>Like</Button>
                                    <Button variant="warning" className="mx-1 flex-grow-1" onClick={props.addToPlaylist}>Add</Button>
                                    <Button variant="primary" className="ml-1 flex-grow-1" onClick={handleShowModal}>Play</Button>
                                </>
                            )}
                        </div>
                    </BootstrapCard.Body>
                </BootstrapCard>
            </Col>
            <$Modal handleCloseModal={handleCloseModal} showModal={showModal} music={props.data} />
        </>
    );
}

Cards.propTypes = {
    id: PropTypes.string.isRequired,
    data: PropTypes.shape({
        url_image: PropTypes.string.isRequired,
        music_name: PropTypes.string.isRequired,
        singer_name: PropTypes.string.isRequired,
    }).isRequired,
    location: PropTypes.string.isRequired,
    deleteSong: PropTypes.func,
    addToLiked: PropTypes.func,
    addToPlaylist: PropTypes.func,
};

export default Cards;
