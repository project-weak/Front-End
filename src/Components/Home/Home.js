import React, { useState, useEffect } from 'react';
import CardList from '../cardLIst/cardList';
import './Home.css';
import axios from 'axios';
import Slider from '../Slider/SliderHome.js';


function Home() {
  const [music, setMusic] = useState([]);

  const getMusicData = () => {
    const url = `https://back-end-10.onrender.com/`;
    axios.get(url)
      .then((response) => {
        console.log(response.data);
        setMusic(response.data);
      }).catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getMusicData();
  }, []);

  return (
    <>
     <Slider/>
      <CardList data={music} location="home" />
    </>
  );
}

export default Home;
