import React, { useState } from 'react';
import { Container, Row, Col, Card as BootstrapCard, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPlus, faHeart } from '@fortawesome/free-solid-svg-icons';
import './SearchResult.css';
//import $Modal from '/home/reem/Front-End/src/Components/Modal/Modal.js';
import AddCommentPopover from '../../Popover/AddCommentPopover';

// // const jsonData = 


function SearchResult(props) {
  let dataData = props;
  let dddd = dataData.data;
  // let idd = dddd.music_name;
  console.log(props.data.id);

  const [showModal, setShowModal] = useState(false);
  const [currentMusic, setCurrentMusic] = useState(null);
  const [showPopover, setShowPopover] = useState({});

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = (music) => {
    setCurrentMusic(music);
    setShowModal(true);
  };

  const handleHidePopover = (type) => {
    setShowPopover((prevState) => ({ ...prevState, [type]: false }));
  };

  const handleShowPopover = (type) => {
    Object.keys(showPopover).forEach((key) => {
      setShowPopover((prevState) => ({ ...prevState, [key]: key === type }));
    });
  };

  return (
  
    <Container>
      {/* <Row>
          <Col key={props.data.id} sm={12} md={6} lg={4} className="mb-4">
            <BootstrapCard className="custom-card h-100">
              <BootstrapCard.Img className="custom-card-img" variant="top" src={props.data.url_image} />
              <BootstrapCard.Body className="d-flex flex-column">
                <BootstrapCard.Text className="custom-card-title">
                  {props.data.music_name}
                </BootstrapCard.Text>
                <BootstrapCard.Text className="custom-card-text">
                  {props.data.singer_name}
                </BootstrapCard.Text>
                <div className="mt-auto d-flex justify-content-between">
                  <AddCommentPopover
                    songId={props.data.id}
                    data={props.data}
                    actionType="liked"
                    show={showPopover.like}
                    onShow={() => handleShowPopover('like')}
                    onHide={() => handleHidePopover('like')}
                    triggerElement={
                      <Button
                        variant="success"
                        className="mx-1 flex-grow-1 custom-button"
                        onClick={() => handleShowPopover('like')}
                      >
                        <FontAwesomeIcon icon={faHeart} />
                      </Button>
                    }
                  />
                  <AddCommentPopover
                    songId={props.data.id}
                    data={props.data}
                    actionType="playlist"
                    show={showPopover.add}
                    onShow={() => handleShowPopover('add')}
                    onHide={() => handleHidePopover('add')}
                    triggerElement={
                      <Button
                        variant="warning"
                        className="mx-1 flex-grow-1 custom-button"
                        onClick={() => handleShowPopover('add')}
                      >
                        <FontAwesomeIcon icon={faPlus} />
                      </Button>
                    }
                  />
                  <Button
                    variant="primary"
                    className="ml-1 flex-grow-1 custom-button"
                    onClick={() => handleShowModal(props.data)}
                  >
                    <FontAwesomeIcon icon={faPlay} />
                  </Button>
                </div>
              </BootstrapCard.Body>
            </BootstrapCard>
          </Col>

      </Row>
      {currentMusic && (
        <$Modal handleCloseModal={handleCloseModal} showModal={showModal} music={currentMusic} />
      )} */}
    </Container>
  );
}

export default SearchResult;