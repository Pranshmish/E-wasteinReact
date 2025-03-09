import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import './Awareness.css';
export const NavigateButton = () => {
    const navigate = useNavigate();
  
    const goToHome = () => {
      navigate("/");
    };
  
    return <button onClick={goToHome} className="home-btn">Home</button>;
  };
    

function Awareness() {
    const goToEwasteInfo = () => {
        window.open("https://www.genevaenvironmentnetwork.org/resources/updates/the-growing-environmental-risks-of-e-waste/")
    };

    return (
        <div> 
            <header>
                <nav>
                    <div className="logo">RecycleHub</div>
                    <ul>
                        <li><Link to="/pickup">Pickup</Link></li>
                        <li><Link to="/rewards">Rewards</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                    <NavigateButton /> 
                </nav>
            </header>

            <section className="hero">
                <h1>Understand the Impact of E-Waste</h1>
                <p>Learn why responsible e-waste disposal is essential for the environment.</p>
                <div className='explore-btn-container'>
                <button className='explore-btn' onClick={goToEwasteInfo}>Explore More</button>
                </div>
            </section>

            <section className="content">
                <div className="info-card">
                    <h2>What is E-Waste?</h2>
                    <p>Electronic waste includes old phones, computers, and appliances that need proper recycling.</p>
                </div>
                <div className="info-card">
                    <h2>Dangers of Improper Disposal</h2>
                    <p>Improper disposal leads to toxic chemical leaks, harming the environment.</p>
                </div>
                <div className="info-card">
                    <h2>Benefits of Recycling</h2>
                    <p>Recycling reduces waste, conserves resources, and protects the planet.</p>
                </div>
            </section>

            <section className="cta">
                <h2>Take Action Today!</h2>
                <button>Find Drop-Off Points</button>
            </section>

            <footer>
                <p>&copy; 2025 RecycleHub. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Awareness;
