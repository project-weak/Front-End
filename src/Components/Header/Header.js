import { Link } from 'react-router-dom';
// This import is for BootStrap NavBar
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

import '../Header/Header.css';
import { hover } from '@testing-library/user-event/dist/hover';



function Header(){
  return (
<Nav className='backgroundColorNavBar'>
      <Nav.Item >
        <Nav.Link style={{color:'white'}}  as={Link} to="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link style={{color:'white'}} as={Link} to="/Library">Your Library</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link style={{color:'white'}} as={Link} to="/about">About Us</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

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
