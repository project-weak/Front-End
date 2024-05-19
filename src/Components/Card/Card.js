
import React from 'react';
import Card from 'react-bootstrap/Card';
import  { useState } from 'react';
import { Card as BootstrapCard, Button, Col } from 'react-bootstrap';
import $Modal from '../Modal/Modal';

function Cards(props) {
const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);
    // Delete music Card
    // const deltetCard = (id) => {
    //     const url = `/${id}`;
    //     axios.delete(url)
    //         .then((response) => {
    //             console.log(response);
    //         }).catch((error) => {
    //             console.log(error);
    //         })
    // }

    // ADD Music Card to DB
    // const addToPlaylist = (music) => {
    //     const postUrl = ``;
    //     axios.post(postUrl, music)
    //         .then((response) => {
    //             console.log(response);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         })
    // }

    // ADD Music Card to DB
    // const addToLiked = (music) => {
    //     const postUrl = ``;
    //     axios.post(postUrl, music)
    //         .then((response) => {
    //             console.log(response);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         })
    // }

    return (

        <>
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
