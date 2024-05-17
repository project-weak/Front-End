import './App.css';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Library from './Components/your_library/Library'



import { Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';

function App() {
  return (
  <>
  <Header />
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/Library" element={<Library />} />
  </Routes>
  <Footer/>

  </>
  );
}

export default App;
