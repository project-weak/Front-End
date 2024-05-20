// import Search from '../Search/search';
import { useState, useEffect } from 'react';
import CardList from '../cardLIst/cardList'
import './Home.css'
import axios from 'axios';
// import Search from '../Search/search';

//const musicData=require('../Data/musicData.json');
const Home = () => {
    const [music, setMusic] = useState([]);

    const [filteredMusic, setFilteredMusic] = useState([]);

    const handleInputChange = (e) => {
      const value = e.target.value.toLowerCase(); // Get the value directly from the input element and convert to lowercase
      const filterItems = music.filter((item) => {
        return item.title.toLowerCase().includes(value);
      });
      setFilteredMusic(filterItems); // Update the filtered music state
    };
    
    const getMusicData = () => {
        const url = `http://localhost:3005/`;
        axios.get(url)
            .then((response) => {
             console.log(response.data)
                setMusic(response.data);
            }).catch((error) => {
                console.log(error);
            })
    }

    useEffect(()=> getMusicData(),[])

  return (
    <>
    
   <CardList data={music}  location="home"/> 
   {/* <Search music={music}/> */}
   </>
  );
}

export default Home;