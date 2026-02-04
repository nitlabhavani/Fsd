import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// --- Components & Components ---
import ScrollToTop from './components/ScrollToTop';
import "./App.css";

// --- Page Imports (Casing and Paths Corrected) ---
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import AdminDashboard from "./pages/AdminDashboard";
import UserRegistrationPage from './pages/UserRegistrationPage';
import UserDashboard from './pages/UserDashboard';
import ProviderDashboard from './pages/ProviderDashboard';

// --- Service & Feature Imports ---
import Services from './pages/Services';
import ServiceDetails from './pages/ServiceDetails';
import Booking from './pages/Booking';
import Payment from './pages/Payment';
import Review from './pages/Review';
import Pay from "./pages/Pay"; // Adjusted to match standard folder structure

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <main className="content-area">
          <ScrollToTop />
          <Routes>
            {/* Main Marketing Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<UserRegistrationPage />} />

            {/* Dashboards */}
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/dashboard" element={<UserDashboard />} />
            <Route path="/provider" element={<ProviderDashboard />} />

            {/* Service & Booking Flow */}
            <Route path="/services" element={<Services />} />
            <Route path="/profile/:id" element={<ServiceDetails />} />
            <Route path="/book/:id" element={<Booking />} />
            <Route path="/reviews/:id" element={<Review />} />
            
            {/* Payments */}
            <Route path="/payments" element={<Pay />} />
            <Route path="/payment-success" element={<Payment />} />

            {/* Fallback Route */}
            <Route path="*" element={
              <div style={{padding: '50px', textAlign: 'center', color: 'white'}}>
                <h2>404: Page Not Found</h2>
                <p>The page you are looking for doesn't exist.</p>
              </div>
            } />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;