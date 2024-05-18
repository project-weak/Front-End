import Search from '../Search/search';

import CardList from '../cardLIst/cardList'
import './Home.css'

const musicData=require('../Data/musicData.json');
const Home = () => {
  return (
    <>
    <Search/>
   <CardList data={musicData}/>
   </>
  );
}

export default Home;