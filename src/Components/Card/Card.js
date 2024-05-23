import './Card.css';
import { useState } from 'react';
import { Card as BootstrapCard, Button, Col } from 'react-bootstrap';
import AddCommentPopover from '../Popover/AddCommentPopover';
import $Modal from '../Modal/Modal';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPlus, faHeart, faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Cards(props) {
    const data = props.data;

    const notifyDelete = () => {
        toast.error('Music has been Delete it!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    const [comment, setComment] = useState(data.comment || ' ');
    const [showModal, setShowModal] = useState(false);
    const [showPopover, setShowPopover] = useState({});
    const [editMode, setEditMode] = useState(false);

    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

    const handleHidePopover = (type) => {
        setShowPopover((prevState) => ({ ...prevState, [type]: false }));

        setShowPopover((prevState) => ({ ...prevState, ["add"]: false }));
        setShowPopover((prevState) => ({ ...prevState, ["like"]: false }));
        setShowPopover((prevState) => ({ ...prevState, ["edit"]: false }));


    };

    const handleShowPopover = (type) => {
        setShowPopover((prevState) => ({ ...prevState, [type]: true }));
    };

    const handleDelete = () => {
        props.handleDelete(data.id);
        const url = `${process.env.REACT_APP_URL}/DELETE`;

        axios.delete(url, {
            params: {
                id: data.id,
                table: data.source_table
            }
        }).then((result) => {
            notifyDelete();
            console.log(result);
        }).catch((error) => {
            console.log(error);
        });
    };

    const handleUpdate = () => {
        setEditMode(true);
        handleShowPopover('edit');
        setShowPopover((prevState) => ({ ...prevState, ["add"]: false }));
    };

    const saveUpdatedComment = (newComment) => {
        const url = `${process.env.REACT_APP_URL}/UPDATE/${data.id}`;
        const updatedData = { ...data, comment: newComment };
        const filter = {
            comment: updatedData.comment || " ",
            table: updatedData.source_table
        };
        console.log(updatedData);

        axios.put(url, filter).then((result) => {
            console.log(result);
            setComment(newComment);
            setShowPopover((prevState) => ({ ...prevState, ["add"]: false }));
            setShowPopover((prevState) => ({ ...prevState, ["like"]: false }));
            setEditMode(false);
        }).catch((error) => {
            console.log(error);
        });
    };

    return (
        <>

            <Col>
                <BootstrapCard className="custom-card h-100">
                    <BootstrapCard.Img className="custom-card-img" variant="top" src={data.url_image} />
                    <BootstrapCard.Body className="d-flex flex-column">
                        <BootstrapCard.Text className="custom-card-title">
                            {data.music_name}
                        </BootstrapCard.Text>
                        <BootstrapCard.Text className="custom-card-text">
                            {data.singer_name}
                        </BootstrapCard.Text>
                        {props.location === 'library' ? (
                            <div className="custom-comment-section">
                                <BootstrapCard.Text className="custom-card-comment">
                                    {comment}
                                </BootstrapCard.Text>
                                <AddCommentPopover
                                    songId={data.id}
                                    data={data}
                                    actionType="edit"
                                    show={showPopover.edit}
                                    onShow={() => handleShowPopover('edit')}
                                    onHide={() => handleHidePopover('edit')}
                                    triggerElement={<Button variant="secondary" className="ml-1 mr-2 btn-pg custom-card-update-button col-3" onClick={handleUpdate}>
                                        <FontAwesomeIcon icon={faEdit} className="mr-2" />
                                    </Button>}
                                    editMode={editMode}
                                    initialComment={comment}
                                    saveComment={saveUpdatedComment}
                                    hidePopover={() => handleHidePopover('edit')}
                                />
                            </div>
                        ) : null}

                        <div className="mt-auto d-flex justify-content-between">
                            {props.location === 'library' ? (
                                <>
                                    <Button variant="primary" className="mr-1 flex-grow-1 mr-2 btn-sm" onClick={handleShowModal}>
                                        <FontAwesomeIcon icon={faPlay} />
                                    </Button>
                                    <Button variant="danger" className="ml-1 flex-grow-1 mr-2 btn-sm" onClick={() => {

                                        handleDelete()
                                    }}>
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
                                    <Button variant="secondary" className="ml-1 flex-grow-1 custom-button" onClick={handleShowModal}>
                                        <FontAwesomeIcon icon={faPlay} />
                                    </Button>
                                </>
                            )}
                        </div>
                    </BootstrapCard.Body>
                </BootstrapCard>
                <$Modal handleCloseModal={handleCloseModal} showModal={showModal} music={props.data} />
            </Col>
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
    handleDelete: PropTypes.func,
    addToLiked: PropTypes.func,
    addToPlaylist: PropTypes.func,
};

export default Cards;
