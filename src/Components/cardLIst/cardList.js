import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Cards from '../Card/Card';

function CardList(props) {
    const data = props.data;

    return (
        <Container className="my-4">
            <Row className="d-flex flex-wrap justify-content-left">
                {data.map((song, index) => (
                    <Cards key={index} data={song} />
                ))}
            </Row>
        </Container>
    );
}

export default CardList;