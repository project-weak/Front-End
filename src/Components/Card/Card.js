import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards(props) {

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
            <Card style={{ width: '18rem', backgroundColor: "#00ADB5", color: "#fdf6fd", fontSize:"20px", fontWeight:700 }} key={props.id}>
                <Card.Img style={{ height: "200px" }} variant="top" src={props.data.albumCover} />
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

        </>
    );
}

export default Cards;
