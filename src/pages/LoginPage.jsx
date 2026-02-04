import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.css";

function LoginPage() {
  const navigate = useNavigate();

  // --- STATE TO CAPTURE INPUTS ---
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Simple check to ensure fields aren't empty
  const isFormValid = () => {
    if (!email.trim() || !password.trim()) {
      alert("Please enter both email and password.");
      return false;
    }
    return true;
  };

  const handleAdminLogin = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      navigate("/admin"); // Navigates to Admin Dashboard if fields are filled
    }
  };

  const handleUserLogin = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      navigate("/"); // Navigates to Home if fields are filled
    }
  };

  return (
    <div className="login-page">

      {/* NAVBAR */}
      <header className="navbar">
        <div className="logo">Skillora</div>
        <nav className="nav-links">
          <Link to="/" className="no-link-style">HOME</Link>
        </nav>
      </header>

      {/* LOGIN FORM */}
      <div className="login-container">
        <h2>Login to Skillora</h2>
        <p>Welcome back! Please login to your account.</p>

        <form className="login-form">
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {/* ROLE BASED BUTTONS */}
          <div className="login-actions">
            <button onClick={handleAdminLogin} className="btn-primary admin-btn">
              Login as Admin
            </button>
            <button onClick={handleUserLogin} className="btn-outline user-btn">
              Login as User
            </button>
          </div>
        </form>

        {/* 🔹 DON'T HAVE ACCOUNT */}
        <p className="login-footer">
          Don’t have an account?{" "}
          <Link to="/register" className="register-link">
            Register
          </Link>
        </p>
      </div>

      {/* ================= FOOTER ================= */}
      <footer className="footer">
        © {new Date().getFullYear()} Skillora. All rights reserved.
      </footer>

    </div>
  );
}

export default LoginPage;