import Search from '../Search/search';import { useState, useEffect } from 'react';
import CardList from '../cardLIst/cardList'
import './Home.css'
import axios from 'axios';


//const musicData=require('../Data/musicData.json');
const Home = () => {
    const [music, setMusic] = useState([]);

    
    const getMusicData = () => {
        const url = `http://localhost:3001/`;
        axios.get(url)
            .then((response) => {
             // console.log(response.data)
                setMusic(response.data);
            }).catch((error) => {
                console.log(error);
            })

    }

    useEffect(()=> getMusicData())

  return (
    <>
    
   <CardList data={music}  location="home"/>
   </>
  );
}

export default Home;