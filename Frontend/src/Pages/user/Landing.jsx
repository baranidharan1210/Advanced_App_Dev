// LandingPage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/landing.css';

const LandingPage = () => {
  const [index, setIndex] = useState(0);
  const texts = [
    'Elevate Your Special Occasions!',
    'Crafting Unforgettable Experiences!',
    'Designing Moments That Last!',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="landing-page-container">
      <div className="landing-content">
        <h1 className="landing-title">Welcome to Golden Glitz</h1>
        <p className="landing-description">{texts[index]}</p>
        <div className="landing-cta-buttons">
          <Link to="/login">
            <button className="landing-btn">Already a User</button>
          </Link>
          <Link to="/signup">
            <button className="landing-btn">New User? Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
