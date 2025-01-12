import React from 'react'
import './Hero_.css';
import { Link } from 'react-router-dom';

function Hero_() {
  return (
    <div className='hero-container'>
      <h1 className='hero-heading'>
        Visit: Your Gateway to Unforgettable Destinations
      </h1>
      <p className='hero-subheading'>
        Plan with ease, book with confidence, and explore with joy—your next adventure starts here
      </p>
      <Link to='/signin'>
        <button> Start Your Journey → </button>
      </Link>
    </div>
)
}

export default Hero_