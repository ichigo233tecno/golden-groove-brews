// File: App.js
import React from 'react';
import './App.css';

const App = () => (
  <div className="App">
    {/* Navigation Bar */}
    <nav className="navbar">
      <div className="logo">Golden Groove Brew </div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
    {/* Hero Section*/}
    <header className="hero" id="home">
      <h1>Welcome to Golden Groove Brew </h1>
      <p>Where Heritage Meets Flavor </p>
      <a href="#about" className='cta-button'>Learn More</a>
    </header>
    {/* About Section */}
    <section className="about" id="about">
      <h2>About Us </h2>
      <p>
        We are young and active team of developers passionate about creating
        and deveoping user-friendly websites to enhance the user experience.
      </p>
    </section>

    {/* Services Section */}
    <section className="services" id="services">
      <h2>Our Servies</h2>
      <div className="service-cards">
        <div className="card">
          <h3>Web Devlopment </h3>
          <p>Building fast and visually appealing interfaces for users.</p>
        </div>
      </div>
    </section>
    <div className="card"></div>
    <h3>UI/UX Design</h3>
    <p>Creating Intuitive and visually appealing interfaces for users.</p>
    <div className="card">
      <h3>SEO Optimization</h3>
      <p>Improving your websites's visibilty on search eangines.</p>
    </div>
    {/* Contact Section */}
    <section className="contact" id="contact">
      <h2>Contact Us</h2>
      <p> Feel free to contact us if you have any questions or project ideas !
      </p>
      <a href="mailto:mawuchris343@gmail.com" className="cta-button">Get in Touch</a>
    </section>

    {/* Footer */}
    <footer className="footer">
      <p>&copy;2025 Golden Groove Brew . All Rights Reserved.</p>
    </footer>
  </div>
);
 
export default App;


