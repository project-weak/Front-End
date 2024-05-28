import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Library from './Components/your_library/Library';
import Search from './Components/Search/search';
import SearchResult from './Components/Search/SearchResult/SearchResult';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/search" element={<Search />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/Library" element={<Library />} />
        <Route path="/results" element={<SearchResult />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;


