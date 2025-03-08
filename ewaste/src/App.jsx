import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
//images import yha hai
import mobileImage from './images/mobiles.jpg';
import laptopImage from './images/laptops.jpg';
import tvImage from './images/tv.jpg';
import user1 from './images/user1.jpg';
import user2 from './images/user2.jpg';

function App() {
  return (
    <>
      <div className="discount-banner">
        <p>Sale is Live!! Get 10% Extra Rewards On Your Old Electronics.</p>
      </div>

      <section className="header">
        <nav>
          <div className="nav-links">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/upload">Upload E-Waste</Link></li>
              <li><Link to="/track">Track Pickup</Link></li>
              <li><Link to="/rewards">Rewards</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/login" className="hero-btn">Register/Login</Link></li>
            </ul>
          </div>
        </nav>
        <div className="text-box">
          <h1>Smart E-Waste Management for a Greener Future!</h1>
          <p>Dispose, Recycle & Earn Rewards – All in One Place!</p>
          <div>
            <a className="hero-btn green" href="#">Find a Disposal Center</a>
            <a className="hero-btn yellow" href="#">Schedule a Pickup</a>
          </div>
        </div>
      </section>

      <section className="steps">
        <h1>How We Work</h1>
        <p>We help you dispose of e-waste responsibly in just 3 simple steps.</p>

        <div className="row">
          <div className="steps-col">
            <h3>Step 1</h3>
            <p>Schedule a pickup or drop your old electronics at our disposal center.</p>
          </div>
          <div className="steps-col">
            <h3>Step 2</h3>
            <p>We collect your e-waste and ensure it is recycled safely.</p>
          </div>
          <div className="steps-col">
            <h3>Step 3</h3>
            <p>Earn rewards for responsibly disposing of e-waste!</p>
          </div>
        </div>
      </section>

      <section className="desp-items">
        <h1>Most Disposed Items</h1>
        <p>Top electronic waste items we recycle.</p>

        <div className="row">
          <div className="desp-items-col">
            <img src={mobileImage} alt="Mobiles" />
            <div className="layer"><h3>MOBILES</h3></div>
          </div>
          <div className="desp-items-col">
            <img src={laptopImage} alt="Laptops" />
            <div className="layer"><h3>LAPTOPS</h3></div>
          </div>
          <div className="desp-items-col">
            <img src={tvImage} alt="Televisions" />
            <div className="layer"><h3>TELEVISIONS</h3></div>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <h1>What Our Customers Say</h1>
        <p>Real feedback from our users.</p>
        <div className="row">
          <div className="testimonial-col">
            <img src={user1} alt="User 1" />
            <div>
              <p>Fantastic service! I easily recycled my old laptop and earned rewards.</p>
              <h3>Maya Love</h3>
              <FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar />
            </div>
          </div>
          <div className="testimonial-col">
            <img src={user2} alt="User 2" />
            <div>
              <p>A hassle-free way to dispose of electronics. Highly recommend!</p>
              <h3>David Warner</h3>
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
