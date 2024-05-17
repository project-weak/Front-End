

import CardList from '../cardLIst/cardList'
import './Home.css'

const musicData=require('../Data/musicData.json');
const Home = () => {
  return (
   <CardList data={musicData}/>
  );
}

export default Home;