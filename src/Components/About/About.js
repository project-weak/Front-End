import './About.css';
import React from 'react';
import AboutusCard from "../AboutusCard/AboutusCard";
import reem from "../../images/reem.jpeg";
import fadi from "../../images/fadi.jpeg";
import muath from "../../images/muath.jpeg";
import yazan from "../../images/yazan.jpeg";
import mohammed from "../../images/mohammed.jpeg";
import NavBar from '../NavBar/NavBar';

function About() {
  return (
    <>
      <NavBar />
      <section className='class-text'>
        <h1>About Melody Hub </h1>
        <p className='the-text'>
          Melody Hub is a music streaming app that brings your favorite
          songs and artists right to your fingertips. Discover new tracks
          and enjoy high-quality audio anytime, anywhere. With an intuitive
          interface and a load of music, Melody Hub is your go-to app for
          an exceptional listening experience.
        </p>
      </section>
      <section className='section-our'>
        Our Team Members
      </section>
      <div className="about-container">
        <AboutusCard className="user-card"
          name="Reem Hasan"
          href="www.linkedin.com/in/reem-hasan-652072237"
          image={reem}
          description="Reem Hasan is a Artificial Intelligence"
        />
        <AboutusCard className="user-card"
          name="Fadi Al-Najar"
          href="https://www.linkedin.com/feed/?trk=nav_back_to_linkedin"
          image={fadi}
          description="Fadi Al-Najar is a Software Engineer"
        />
        <AboutusCard className="user-card"
          name="Mohammed"
          href="https://www.linkedin.com/in/muhammad-flaifle-6a620029a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          image={mohammed}
          description="Mohammed is a Computer Science"
        />
        <AboutusCard className="user-card"
          name="Muath"
          href="https://www.linkedin.com/in/muath-mhawich-29166024b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          image={muath}
          description="Muath is a Computer Science"
        />
        <AboutusCard className="user-card"
          name="Yazan Husain"
          href="https://www.linkedin.com/in/yazan-hussein-b57374b5/\"
          image={yazan}
          description="Yazan Husain is a Hospitality"
        />
      </div>
    </>
  );
}


export default About;


