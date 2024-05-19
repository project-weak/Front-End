// src/Components/Card/Card.js
import React, { useState } from 'react';
import { Card as BootstrapCard, Button, Col } from 'react-bootstrap';
import AddCommentPopover from '../Popover/AddCommentPopover'; // استيراد AddCommentPopover
import $Modal from '../Modal/Modal';
import PropTypes from 'prop-types';
import './Card.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPlus, faHeart } from '@fortawesome/free-solid-svg-icons';

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
<<<<<<< HEAD
            <Card style={{ width: '18rem', backgroundColor: "#1B1A55", color: "#76ABAE", fontSize:"20px", fontWeight:700 }} key={props.id}>
                <Card.Img style={{ height: "200px" }} variant="top" src="https://e.snmc.io/i/600/s/4354ef5dc08ebcd49a50f0323ffe4aac/12061612" />
                <Card.Body className='bodyCard d-flex flex-column justify-content-between'>
                    <Card.Title style={{ color: "#E3FEF7" }}>{props.title}</Card.Title>
                    <Card.Text>
                        {props.data.songName}
                    </Card.Text>
                    <Card.Text>
                        {props.data.artistName}
                    </Card.Text>
                    <div className="mt-auto d-flex justify-content-between">
                        {props.location === 'library' ?
                            <>
                                {/* <Button variant="primary" className="mr-1 flex-grow-1">Play</Button>
                                <Button variant="primary" className="mr-1 flex-grow-1">Delete</Button> */}
                                {/* <Button variant="primary" className="mr-1 flex-grow-1" onClick={deltetMovie}>Delete</Button> */}
                            </> :
                            <>
                                {/* <Button variant="success" className="mx-1 flex-grow-1">Like</Button>
                                <Button variant="warning" className="ml-1 flex-grow-1">Add</Button>
                                <Button variant="primary" className="mr-1 flex-grow-1">Play</Button> */}

                                {/* <Button variant="warning" className="ml-1 flex-grow-1" onClick={addToPlaylist}>Add</Button> */}
                                {/* <Button variant="success" className="mx-1 flex-grow-1" onClick={addToLiked}>Like</Button> */}

                            </>
                        }
                    </div>
                </Card.Body>
            </Card>


            <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
                <BootstrapCard className="bg-dark text-light h-100">
                    <BootstrapCard.Img variant="top" src={props.data.albumCover} />
                    <BootstrapCard.Body className="d-flex flex-column">
                        <BootstrapCard.Title>{props.data.songName}</BootstrapCard.Title>
                        <BootstrapCard.Text>{props.data.artistName}</BootstrapCard.Text>
=======
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
>>>>>>> refs/remotes/origin/main
                        <div className="mt-auto d-flex justify-content-between">
                            {props.location === 'library' ? (
                                <>
                                    <Button variant="primary" className="mr-1 flex-grow-1" onClick={handleShowModal}>Play</Button>
                                    <Button variant="danger" className="ml-1 flex-grow-1" onClick={props.deleteSong}>Delete</Button>
                                </>
                            ) : (
                                <>
                                    <AddCommentPopover
                                        songId={data.id}
                                        actionType="like"
                                        show={showPopover.like}
                                        onShow={() => handleShowPopover('like')}
                                        onHide={() => handleHidePopover('like')}
                                        triggerElement={<Button variant="success" className="mx-1 flex-grow-1 custom-button" onClick={() => handleShowPopover('like')}>
                                            <FontAwesomeIcon icon={faHeart} />
                                        </Button>}
                                    />
                                    <AddCommentPopover
                                        songId={data.id}
                                        actionType="add"
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
