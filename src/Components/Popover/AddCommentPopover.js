import { useState, useEffect } from 'react';
import { Popover, OverlayTrigger, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
import './AddCommentPopover.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddCommentPopover({ songId, actionType, triggerElement, show, onShow, onHide, data, editMode, initialComment, saveComment }) {

    const [comment, setComment] = useState('');

    useEffect(() => {
        if (show && editMode) {
            setComment(initialComment || '');
        }
    }, [show, initialComment, editMode]);

    const handleChange = (event) => {
        setComment(event.target.value);
    };

    const handleSubmit = () => {
        if (editMode) {
            saveComment(comment);
            toast.success('Comment updated successfully!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            onHide();
        } else {
            axios.post(`${process.env.REACT_APP_URL}/addMusic`, {
                music_name: data.music_name,
                singer_name: data.singer_name,
                url_image: data.url_image,
                audio: data.audio,
                comment: comment,
                table: actionType
            })
                .then(response => {
                    console.log('Comment saved successfully');
                    toast.success('Comment saved successfully!', {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    onHide();
                })
                .catch(error => {
                    console.error('There was an error saving the comment!', error);
                });
        }
        setComment('');
    };

    const handleCancel = () => {
        onHide();
    };

    const popover = (
        <Popover id="popover-basic">
            <Popover.Header as="h3">
                <FontAwesomeIcon icon={faCommentDots} /> {editMode ? 'Edit Comment' : 'Add Comment'}
            </Popover.Header>
            <Popover.Body>
                <Form>
                    <Form.Group controlId="formComment">
                        <Form.Label>Comment</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your comment"
                            value={comment}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Form>
                <div className="d-flex justify-content-between">
                    <Button variant="secondary" onClick={handleCancel}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Save
                    </Button>
                </div>
            </Popover.Body>
        </Popover>
    );

    return (
        <OverlayTrigger trigger="click" placement="right" overlay={popover} show={show} onToggle={onHide}>
            {triggerElement || <div></div>}
        </OverlayTrigger>
    );
}

export default AddCommentPopover;
