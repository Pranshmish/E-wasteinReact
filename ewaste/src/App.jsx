import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import mobileImage from "./images/mobiles.jpg";
import laptopImage from "./images/laptops.jpg";
import tvImage from "./images/tv.jpg";
import user1 from "./images/user1.jpg";
import user2 from "./images/user2.jpg";

function App() {
  return (
    <>

      <header className="header">
        <nav>
          <div className="logo">Regeni</div>
          <div className='page'>
          <ul>
            <li><Link to="/upload">Upload E-Waste</Link></li>
            <li><Link to="/awareness">Why Regeni?</Link></li>
            <li><Link to="/track">Track Pickup</Link></li>
            <li><Link to="/rewards">Rewards</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/login" className="btn">Register/Login</Link></li>
          </ul>
          </div>
        </nav>
      </header>

      <section className="hero">
        <div className="text-box">
          <h1>Smart E-Waste Management for a Greener Future!</h1>
          <p>Dispose, Recycle & Earn Rewards – All in One Place!</p>
          <div className="hero-buttons">
            <a className="btn" href="#">Find a Disposal Center</a>
            <a className="btn-outline" href="#">Schedule a Pickup</a>
          </div>
        </div>
      </section>

      <section className="steps">
        <h1>How We Work</h1>
        <div className="row">
          <div className="step">
            <h3>Step 1</h3>
            <p>Schedule a pickup or drop your old electronics at our disposal center.</p>
          </div>
          <div className="step">
            <h3>Step 2</h3>
            <p>We collect your e-waste and ensure it is recycled safely.</p>
          </div>
          <div className="step">
            <h3>Step 3</h3>
            <p>Earn rewards for responsibly disposing of e-waste!</p>
          </div>
        </div>
      </section>

      <section className="disposed-items">
        <h1>Most Disposed Items</h1>
        <div className="row">
          <div className="item">
            <img src={mobileImage} alt="Mobiles" />
            <h3>MOBILES</h3>
          </div>
          <div className="item">
            <img src={laptopImage} alt="Laptops" />
            <h3>LAPTOPS</h3>
          </div>
          <div className="item">
            <img src={tvImage} alt="Televisions" />
            <h3>TELEVISIONS</h3>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <h1>What Our Customers Say</h1>
        <div className="row">
          <div className="testimonial">
            <img src={user1} alt="User 1" />
            <p>Fantastic service! I easily recycled my old laptop and earned rewards.</p>
            <h3>Maya Love</h3>
            <div className="stars">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar />
            </div>
          </div>
          <div className="testimonial">
            <img src={user2} alt="User 2" />
            <p>A hassle-free way to dispose of electronics. Highly recommend!</p>
            <h3>David Warner</h3>
            <div className="stars">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
