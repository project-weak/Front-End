import './Header.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className='home-header in-about'>
      <div id="logo">Melody<span id="logo-s">Hub</span></div>
      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <span className="home"><Link className="act" to="/about">About Us</Link></span>
        <span className="home"><Link className="act" to="/Library">Library</Link></span>
        <span className="home"><Link className="act" to="/">Home</Link></span>
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        ☰
      </div>
    </header>
  );
}

export default NavBar;

