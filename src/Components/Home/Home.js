

import CardList from '../cardLIst/cardList'

const musicData=require('../Data/musicData.json');
const Home = () => {
  return (
   <CardList data={musicData}/>
  );
}

export default Home;