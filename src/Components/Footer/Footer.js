import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import '../Footer/Footer.css';

function Footer() {
  return (
    <>
    <div className='textCenterArea'>
    <div className='bodybackgroundColor'>
    <Nav className='backgroundColorNavBar'>
      <Navbar.Brand className='logo' href="/">Melody Hub</Navbar.Brand>

      <Nav.Item>
        <Nav.Link className='link' as={Link} to="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className='link' as={Link} to="/Library">Your Library</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className='link'  as={Link} to="/about">About</Nav.Link>
      </Nav.Item>
      <img className='facebook' src='/home/yazan/Front-End/src/Components/img/facebook.png' alt=''/>
      <img className='twitter' src='' alt=''/>
      <img className='instagram' src='' alt=''/>
    </Nav>
    
    <hr className='line'/>
    <p > @ Copyright 2024, All Rights</p>
    <p >Resved by Logo</p>
    </div>
    </div>
    </>
  );
}

export default Footer;