import React from 'react';
import './App.css';
import logo from './logo.svg'; // Add your company logo

export default function App() {
  return (
    <div className="page-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-container">
          {/* Left Side: Logo and Brand */}
          <div className="navbar-left">
            <img src={logo} alt="Sunshine Energy Logo" className="navbar-logo" />
            <span className="navbar-brand">Sunshine Energy Consultants</span>
          </div>

          {/* Right Side: Call Button */}
          <div className="navbar-right">
            <a href="tel:3523400931" className="navbar-call-link">
              Call us today: 352-340-0931
            </a>
          </div>
        </div>
      </nav>
      

{/* Hero Section */}
<div className="hero-section">
  {/* Left Text Content */}
  <div className="hero-content">
    <h1>We help homeowners make better energy decisions</h1>
    <p>
      Learn the lingo so you can get the best solar panel deals for your family
      and significantly lower your energy bills.
    </p>
    <a href="https://drive.google.com/uc?export=download&id=1QWjkvwMJ2UHqE163FpYEeLuuRYxglftS" className="hero-cta">Download Your FREE Solar Guide</a>
  </div>

  {/* Right Image Content */}
  <div className="hero-image-container">
    <img
      src="/photos/photo2.webp"
      alt="Solar Panels"
      className="hero-image"
    />
  </div>
</div>
      {/* Section 1 */}
      <div className="section section-light">
        <div className="section-content">
          <h2>Why Choose Solar Energy?</h2>
          <p>Learn how solar panels can save you money, increase your home’s value, and help the planet.</p>
          <div className="cards">
            <div className="card">
              <h3>Lower Your Energy Bills</h3>
              <p>Reduce monthly energy costs with affordable and efficient solar solutions.</p>
            </div>
            <div className="card">
              <h3>Increase Property Value</h3>
              <p>Homes with solar systems sell faster and at higher prices.</p>
            </div>
            <div className="card">
              <h3>Go Green</h3>
              <p>Contribute to a cleaner, greener environment by reducing carbon emissions.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="section section-white">
        <div className="section-content">
          {/* Hero Image */}
          <div className="hero-square">
            <img 
              src='/photos/photo1.webp' 
              alt="Solar Panels Section 2 Hero" 
              className="hero-square-img" 
            />
          </div>
          {/* Call to Action */}
          <a href="tel:3523400931" className="cta-red">
            Schedule Your FREE Solar Consultation
          </a>
        </div>
      </div>

      {/* Section 3 */}
      <div className="section section-pastel">
        <div className="section-content">
          <h2>Helping 100 Families Go Solar in Central Florida</h2>
          <p>Join the movement toward energy independence. Start saving with clean solar power.</p>
          <div className="info-box">
            <h3>What You’ll Learn in Our Free Solar Guide</h3>
            <p>
              Discover how to select the best solar panels, understand financing options, and maximize your energy savings.
            </p>
            <a href="https://drive.google.com/uc?export=download&id=1QWjkvwMJ2UHqE163FpYEeLuuRYxglftS" className="cta-red">Download Your FREE Solar Guide</a>
          </div>
        </div>
      </div>
    </div>
  );
}