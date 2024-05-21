import React from 'react';
import AboutusCard from "../AboutusCard/AboutusCard";
import reem from "../../images/reem.jpeg";
import fadi from "../../images/fadi.jpeg";
import muath from "../../images/muath.jpeg";
import yazan from "../../images/yazan.jpeg";
import mohammed from "../../images/mohammed.jpeg";
import './About.css';  // Import the CSS file

function About() {
  return (
    <div className="about-container">
      <AboutusCard 
        name="Reem Hasan" 
        href="www.linkedin.com/in/reem-hasan-652072237" 
        image={reem} 
        description="Reem Hasan, a fresh graduate specializing in Artificial Intelligence, is eager to explore new horizons in full-stack development using .NET. Reem is passionate about leveraging AI to create innovative solutions and is excited to contribute to dynamic projects."
      />
      <AboutusCard 
        name="Fadi Al-Najar" 
        href="https://www.linkedin.com/feed/?trk=nav_back_to_linkedin" 
        image={fadi} 
        description="Fadi Al-Najar, a Software Engineer, is a dedicated full-stack developer with a strong passion for both front-end and back-end development. Fadi thrives in creating seamless web applications and enjoys tackling challenging problems to deliver efficient solutions."
      />
      <AboutusCard 
        name="Mohammed" 
        href="https://www.linkedin.com/in/muhammad-flaifle-6a620029a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
        image={mohammed} 
        description="Mohammed is a Computer Science graduate from Al-Balqa Applied University. He has a keen interest in software development and is continuously enhancing his skills to stay abreast of the latest technological advancements.doing more exploration on .NET"
      />
      <AboutusCard 
        name="Muath" 
        href="https://www.linkedin.com/in/muath-mhawich-29166024b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
        image={muath} 
        description="Muath, a Computer Science major graduate, combines a deep understanding of the field with a passion for continuous learning. His expertise spans across various aspects of software development."
      />
      <AboutusCard 
        name="Yazan Husain" 
        href="https://www.linkedin.com/in/yazan-hussein-b57374b5/\" 
        image={yazan} 
        description="Yazan Husain, with a major in Hospitality and over 10 years of experience, is transitioning into the tech industry. He is eager to apply his customer service skills to technology and is committed to deepening his knowledge in this new field."
      />
    </div>
  );
}


export default About;


