import React, { useEffect } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function NavBar() {

  return (
    <header className='home-header in-about'>
      <div id="logo">Melody<span id="logo-s">Hub</span></div>

      <span class="home"><Link class="act" to="/about">About Us</Link></span>
      <span class="home"><Link class="act" to="/Library">Library</Link></span>
      <span class="home"><Link class="act" to="/">Home</Link></span>
    </header>

  );
};


export default NavBar;

