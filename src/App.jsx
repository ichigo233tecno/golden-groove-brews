// File: App.js
import React from 'react';
import './App.css';

const App = () => (
  <div className="App">
    {/* Navigation Bar */}
    <nav classname="navbar">
      <div className="logo">Golden Groove Brew </div>
      <ul classname="nav-links">
        <li><a herf="#home">Home</a></li>
        <li><a herf="#about">About</a></li>
        <li><a herf="#services">Services</a></li>
        <li><a herf="#contact">Contact</a></li>
      </ul>
    </nav>
    {/* Hero Section*/}
    <header classname="hero" id="home">
      <h1>Welcome to Goledn Groove Brew </h1>
      <p>Where Heritage Meets Flavor </p>
      <a herf="#about" classname='cta-button'>Learn More</a>
    </header>
    {/* About Section */}
    <section classname="about" id="about">
      <h2>About Us </h2>
      <p>
        We are young and active team of developers passionate about creating
        and deveoping user-friendly websites to enhance the user experience.
      </p>
    </section>

    {/* Services Section */}
    <section classname="services" id="services">
      <h2>Our Servies</h2>
      <div classname="service-cards">
        <div classname="card">
          <h3>Web Devlopment </h3>
          <p>Building fast and visually appealing interfaces for users.</p>
        </div>
      </div>
    </section>
    <div classname="card"></div>
    <h3>UI/UX Design</h3>
    <p>Creating Intuitive and visually appealing interfaces for users.</p>
    <div classname="card">
      <h3>SEO Optimization</h3>
      <p>Improving your websites's visibilty on search eangines.</p>
    </div>
    {/* Contact Section */}
    <section classname="contact" id="contact">
      <h2>Contact Us</h2>
      <p> Feel free to contact us if you have any questions or project ideas !
      </p>
      <a herf="mailto:mawuchris343@gmail.com" classname="cta-button">Get in Touch</a>
    </section>

    {/* Footer */}
    <footer classname="footer">
      <p>&copy;2025 Golden Groove Brew . All Rights Reserved.</p>
    </footer>
  </div>
);
 
export default App;


