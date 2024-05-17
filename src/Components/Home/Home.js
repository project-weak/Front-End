import { useEffect } from 'react';
import CardList from '../cardLIst/cardList'

const musicData=require('../Data/musicData.json');
const Home = () => {
    // const [music, setMusic] = useState([]);

    // Get Data from server End point API
    // const getMusicData = () => {
    //     const url = ``;
    //     axios.get(url)
    //         .then((response) => {
    //             setMusic(response.data);
    //         }).catch((error) => {
    //             console.log(error);
    //         })

    // }

    // useEffect(()=> getMusicData())

  return (
   <CardList data={musicData} location="home"/>
  );
}

export default Home;