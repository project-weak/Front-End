import React from 'react';
import { Card as BootstrapCard, Button, Container, Row, Col } from 'react-bootstrap';

function Cards(props) {
    console.log(props.data);

    return (
     
                
                    <Col  xs={10} sm={4} md={3} lg={2} className="mb-4">
                        <BootstrapCard className="bg-dark text-light h-100">
                            <BootstrapCard.Img variant="top" src={props.data.albumCover} />
                            <BootstrapCard.Body className="d-flex flex-column">
                                <BootstrapCard.Title>{props.data.songName}</BootstrapCard.Title>
                                <BootstrapCard.Text>{props.data.artistName}</BootstrapCard.Text>
                                <div className="mt-auto d-flex justify-content-between">
                                    <Button variant="primary" className="mr-1 flex-grow-1">Play</Button>
                                    <Button variant="success" className="mx-1 flex-grow-1">Like</Button>
                                    <Button variant="warning" className="ml-1 flex-grow-1">Add</Button>
                                </div>
                            </BootstrapCard.Body>
                        </BootstrapCard>
                    </Col>
            
        
    );
}

export default Cards;
