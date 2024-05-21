import React, { useState, useEffect } from 'react';
import { Card as BootstrapCard, Button, Col, Form } from 'react-bootstrap';
import AddCommentPopover from '../Popover/AddCommentPopover';
import $Modal from '../Modal/Modal';
import PropTypes from 'prop-types';
import './Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPlus, faHeart, faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Cards(props) {
    const data = props.data;
    // console.log(data);
    const [comment, setComment] = useState(data.comment || '')
    const [showModal, setShowModal] = useState(false);
    const [showPopover, setShowPopover] = useState({});

    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

    const handleHidePopover = (type) => {
        setShowPopover((prevState) => ({ ...prevState, [type]: false }));

    };
    
    const handleShowPopover = (type) => {
  
        Object.keys(showPopover).forEach(key => {
            setShowPopover(prevState => ({ ...prevState, [key]: key === type }));
        });
    };


    const handleDelete = () => {
        const url = `https://back-end-10.onrender.com/DELETE`;

        axios.delete(url, {
            params: {
                id: data.id,
                table: data.source_table
            }
        }
        ).then((result) => {
            console.log(result);

        }).catch((error) => {
            console.log(error);
        });
    }


    const updatedComment = (e) => (setComment(e.target.value))
    const handleUpDate = () => {
        const url = `https://back-end-10.onrender.com/UPDATE/${data.id}`;
        const updatedData = { ...data, comment: comment };
        const filter = {
            comment: updatedData.comment,
            table: updatedData.source_table
        }
        console.log(updatedData);

        axios.put(url, filter).then((result) => {
            console.log(result);
        }).catch((error) => {
            console.log(error);
        })
    }

  

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
                        {props.location === 'library' ? (
                            <BootstrapCard.Text className="custom-card-text">
                                <>
                                    <Form.Control
                                        type="text"
                                        name='comment'
                                        placeholder="Enter updated comment"
                                        value={comment}
                                        onChange={updatedComment}
                                    />
                                    <Button
                                        variant="primary"
                                        className="ml-1 flex-grow-1 mr-2 btn-pg"
                                        onClick={handleUpDate}
                                    >
                                        Update
                                    </Button>
                                </>
                            </BootstrapCard.Text>
                        ) : null}

                        <div className="mt-auto d-flex justify-content-between">
                            {props.location === 'library' ? (
                                <>
                                    <Button variant="primary" className="mr-1 flex-grow-1 mr-2 btn-sm" onClick={handleShowModal}>
                                        <FontAwesomeIcon icon={faPlay} />
                                    </Button>
                                    <Button variant="danger" className="ml-1 flex-grow-1 mr-2 btn-sm" onClick={handleDelete}>
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
        comment: PropTypes.string.isRequired,
    }).isRequired,
    location: PropTypes.string.isRequired,
    deleteSong: PropTypes.func,
    addToLiked: PropTypes.func,
    addToPlaylist: PropTypes.func,
};

export default Cards;
