import React, { useEffect } from 'react';
import './Header.css';
import Search from '../Search/search';


const Header = () => {
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 30) {
        document.body.classList.add('sticky-header');
      } else {
        document.body.classList.remove('sticky-header');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header>
      <h1>Melody Hub</h1>
      <div>
      <nav>
        <div >
        <a href="/">Home</a>
        <a href="/Library">Library</a>
        <a href="/about">About</a>
        
        </div>
        
      </nav>
      <Search />
      
      </div>

    </header>
  );
};

      
export default Header;


/*
I these links import in the header
import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
// This import is for BootStrap NavBar
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

then i add the navbar in the header
*/


/*
I these links import in the header
import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
// This import is for BootStrap NavBar
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

then i add the navbar in the header
*/