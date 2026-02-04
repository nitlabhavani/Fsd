import React from "react";
import { Link } from "react-router-dom";
import "./AboutPage.css";
// IMPORT the video so Vite knows to include it in the build
import aboutVideo from "../assets/about.mp4"; 

function AboutPage() {
  return (
    <div className="homepage">
      {/* ================= NAVBAR ================= */}
      <header className="navbar">
        <div className="logo">Skillora</div>
        <nav className="nav-links">
          <Link to="/" className="no-link-style">HOME</Link>
          <Link to="/about" className="no-link-style">ABOUT</Link>
          <Link to="/login" className="no-link-style">
            <button className="btn-primary">Sign In</button>
          </Link>
    
        </nav>
      </header>

      {/* ================= ABOUT HERO WITH VIDEO ================= */}
      <section className="hero about-hero-split">
        <div className="hero-content left-align">
          <h1>About Skillora</h1>
          <p>
            Skillora is a modern freelance marketplace designed to connect
            talented professionals with businesses looking for reliable,
            high-quality services.
          </p>
          <Link to="/login" className="no-link-style">
             <button className="btn-primary">Explore Skills</button>
          </Link>

        </div>

        {/* VIDEO CONTAINER */}
        <div className="hero-animation-right">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="main-video-element"
          >
            {/* USE the imported variable here instead of a string path */}
            <source src={aboutVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* ================= REST OF CONTENT ================= */}
      <section className="features">
        <h2>Who We Are</h2>
        <p style={{ maxWidth: "800px", margin: "20px auto", lineHeight: "1.8", color: "#94a3b8" }}>
          Skillora was created to bridge the gap between skilled freelancers and
          clients seeking trusted expertise. Our platform enables secure
          collaboration, transparent payments, and efficient project
          management—all in one place.
        </p>
      </section>

      <section className="stats">
        <div className="stat-card">
          <h3>Our Mission</h3>
          <p>To empower freelancers and businesses by providing a secure, transparent, and easy-to-use marketplace.</p>
        </div>
        <div className="stat-card">
          <h3>Our Vision</h3>
          <p>To become a global platform where skills meet opportunity without boundaries.</p>
        </div>
        <div className="stat-card">
          <h3>Our Values</h3>
          <p>Trust, transparency, quality, and innovation drive everything we do.</p>
        </div>
      </section>

      <footer className="footer">
        © {new Date().getFullYear()} Skillora. All rights reserved.
      </footer>
    </div>
  );
}

export default AboutPage;