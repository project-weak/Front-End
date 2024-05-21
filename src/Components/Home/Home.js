import { useState, useEffect } from 'react';
import CardList from '../cardLIst/cardList'
import './Home.css'
import axios from 'axios';


//const musicData=require('../Data/musicData.json');
const Home = () => {
    const [music, setMusic] = useState({});

    
    const getMusicData = () => {
        const url = `https://back-end-10.onrender.com/`;
        axios.get(url)
            .then((response) => {
             console.log(response.data.top)
                setMusic(response.data);
            }).catch((error) => {
                console.log(error);
            })

    }

    useEffect(()=> getMusicData(),[])

  return (
    <>
    {console.log(music)}
   <CardList data={music}  location="home"/> 
    {/* <Search data={music}  location="home"/>   */}
   </>
  );
}

export default Home;