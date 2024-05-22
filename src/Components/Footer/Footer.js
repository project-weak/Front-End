


import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Footer/Footer.css';
import { ToastContainer } from 'react-toastify';


import facebookImg from '../assets/icons/facebook.png';

function Footer() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
     
    const serviceID = 'service_5qtneyp';
    const templateID = 'template_trhhmpm';
    const userID = 'GlJO8XwDDD2YeuMsz';

    emailjs.sendForm(serviceID, templateID, e.target, userID)
      .then((result) => {
        console.log(result.text);
        toast.success('Email sent successfully!', {
          // position: toast.POSITION.BOTTOM_RIGHT;
        });
      }, (error) => {
        console.log(error.text);
        toast.error('Error sending email.', {
          // position: toast.POSITION.BOTTOM_RIGHT

        });
      });
    console.log(`Email sent from: ${email} with message: ${message}`);  
  };

  return (
    <>
      <footer className="footer">
        <div className="footer-col">
          <h3>About</h3>
          <p>We are a platform dedicated to connecting music lovers with the best artists and their latest releases.</p>
        </div>
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/library">Library</Link></li>
            <li><Link to="/albums">Albums</Link></li>
            <li><Link to="/playlists">Playlists</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h3>Follow Us</h3>
          <ul>
            <li><Link to="#">Facebook</Link></li>
            <li><Link to="#">LinkedIn</Link></li>
            <li><Link to="#">Instagram</Link></li>
            <li><Link to="#">Youtube</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h3>Contact Us</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input  
              type="text"
              placeholder="Send message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit">Send</button>
          </form>
        </div>
      </footer>
      <ToastContainer />
    
     </>
  );
}

export default Footer;