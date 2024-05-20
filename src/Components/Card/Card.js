// src/Components/Card/Card.js
import React, { useState } from 'react';
import { Card as BootstrapCard, Button, Col } from 'react-bootstrap';
import AddCommentPopover from '../Popover/AddCommentPopover'; 
import $Modal from '../Modal/Modal';
import PropTypes from 'prop-types';
import './Card.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPlus, faHeart ,faTrash } from '@fortawesome/free-solid-svg-icons';

function Cards(props) {
    const data = props.data;
    
    const [showModal, setShowModal] = useState(false);
    const [showPopover, setShowPopover] = useState({});

    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

    const handleHidePopover = (type) => {
        setShowPopover((prevState) => ({ ...prevState, [type]: false }));
        
    };

    const handleShowPopover = (type) => {
        setShowPopover((prevState) => ({ ...prevState, [type]: true }));
    };

    return (
        <>

                        <div className="mt-auto d-flex justify-content-between">
                            {props.location === 'library' ? (
                            <>
                            <Button variant="primary" className="mr-1 flex-grow-1 mr-2 btn-sm" onClick={handleShowModal}>
                                <FontAwesomeIcon icon={faPlay} />
                            </Button>
                            <Button variant="danger" className="ml-1 flex-grow-1 mr-2 btn-sm" onClick={props.deleteSong}>
                                <FontAwesomeIcon icon={faTrash} />
                            </Button>
                        </>
                        
                            ) : (
                                <>
                                    <AddCommentPopover
                                        songId={data.id}
                                        data={data}
                                        actionType="liked"
                                        show={showPopover.like}
                                        onShow={() => handleShowPopover('like')}
                                        onHide={() => handleHidePopover('like')}
                                        triggerElement={<Button variant="success" className="mx-1 flex-grow-1 custom-button" onClick={() => handleShowPopover('like')}>
                                            <FontAwesomeIcon icon={faHeart} />
                                        </Button>}
                                    />
                                    <AddCommentPopover
                                    
                                        songId={data.id}
                                        data={data}
                                        actionType="playlist"
                                        show={showPopover.add}
                                        onShow={() => handleShowPopover('add')}
                                        onHide={() => handleHidePopover('add')}
                                        triggerElement={<Button variant="warning" className="mx-1 flex-grow-1 custom-button" onClick={() => handleShowPopover('add')}>
                                            <FontAwesomeIcon icon={faPlus} />
                                        </Button>}
                                    />
                                    <Button variant="primary" className="ml-1 flex-grow-1 custom-button" onClick={handleShowModal}>
                                        <FontAwesomeIcon icon={faPlay} />
                                    </Button>
                                </>
                            )}
                        </div>

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
