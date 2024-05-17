import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
    <Nav className='backgroundColorNavBar'>
      <Navbar.Brand style={{color:'white'}} href="/">Melody Hub</Navbar.Brand>

      <Nav.Item>
        <Nav.Link style={{color:'white'}} as={Link} to="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link style={{color:'white'}} as={Link} to="/Library">Your Library</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link style={{color:'white'}} as={Link} to="/about">About</Nav.Link>
      </Nav.Item>
      <img className='facebook' src='' alt=''/>
      <img className='twitter' src='' alt=''/>
      <img className='instagram' src='' alt=''/>
    </Nav>
    <hr/>
    <p className='copyright_text'>@ Copyright 2024, All Rights</p>
    <p className='RBL_text'>Resved by Logo</p>
    </>
  );
}

export default Footer;