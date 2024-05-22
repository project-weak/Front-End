import React, { useEffect } from 'react';
import './Header.css';
import Search from '../Search/search';
import { Link } from 'react-router-dom';

function NavBar() {

  return (
    <header className='home-header in-about'>
    <div id="logo">Melody<span id="logo-s">Hub</span></div>

    <span class="home"><Link class="act" to="/about">About Us</Link></span>
    <span class="home"><Link class="act" to="/Library">Library</Link></span>
    <span class="home"><Link class="act" to="/">Home</Link></span>
</header>
    // <header className='class-navbar'>
    //   <div>
    //   <nav>
    //     <div>
    //     <div id="logo">Melody<span id="logo-s">Hub</span></div>
    //     <a href="/">Home</a>
    //     <a href="/Library">Library</a>
    //     <a href="/about">About</a>
        
    //     </div>
        
    //   </nav>
    //   {/* <Search /> */}
      
    //   </div>

    // </header>
  );
};

      
export default NavBar;

