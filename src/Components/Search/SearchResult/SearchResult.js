import React, { useState } from 'react';
import { Container, Row, Col, Card as BootstrapCard, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPlus, faHeart } from '@fortawesome/free-solid-svg-icons';
import './SearchResult.css';
import CardList from '../../cardLIst/cardList';






function SearchResult(props) {
  let data = props.data;

  // let idd = dddd.music_name;
  console.log(data);

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
  
    <CardList data={data} location="search" />
  );
}

export default SearchResult;