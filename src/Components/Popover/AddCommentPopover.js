// src/Components/Popover/AddCommentPopover.js
import React, { useState, useEffect } from 'react';
import { Popover, OverlayTrigger, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
import './AddCommentPopover.css';

function AddCommentPopover({ songId, actionType, triggerElement, show, onShow, onHide }) {
    const [comment, setComment] = useState('');

    useEffect(() => {
        if (show) {
            onShow();
        }
    }, [show, onShow]);

    const handleChange = (event) => {
        setComment(event.target.value);
    };

    const handleSubmit = () => {
        const payload = {
            songId: songId,
            comment: comment,
            actionType: actionType,
        };

        axios.post('/api/saveComment', payload)
            .then(response => {
                console.log('Comment saved successfully');
                onHide(); // Close the popover after saving the comment
            })
            .catch(error => {
                console.error('There was an error saving the comment!', error);
            });

        setComment('');
    };

    const handleCancel = () => {
        onHide(); 
    };

    const popover = (
        <Popover id="popover-basic">
            <Popover.Header as="h3"><FontAwesomeIcon icon={faCommentDots} /> Add Comment</Popover.Header>
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
            {triggerElement}
        </OverlayTrigger>
    );
}

export default AddCommentPopover;