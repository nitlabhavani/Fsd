import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import UserRegistrationPage from './pages/UserRegistrationPage';
import Services from './pages/Services';
import ServiceDetails from './pages/ServiceDetails';
import Booking from './pages/Booking';
import Payment from './pages/Payment';
import Review from './pages/Review';
import UserDashboard from './pages/UserDashboard';
import ProviderDashboard from './pages/ProviderDashboard';
import "./App.css";
import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
    <div className="app-container">
      
      <main className="content-area">
        <ScrollToTop/>
        <Routes>
          <Route path="/register" element={<UserRegistrationPage />} />
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/provider"  element={<ProviderDashboard />} />

          <Route path="/services" element={<Services />} />
          <Route path="/profile/:id" element={<ServiceDetails />} />
          <Route path="/book/:id" element={<Booking />} />
          <Route path="/reviews/:id" element={<Review />} />
          <Route path="/payment-success" element={<Payment />} />
          <Route path="/" element={<Navigate to="/services" replace />} />
          <Route path="*" element={<div style={{padding: '20px'}}><h2>Page Not Found</h2></div>} />
        </Routes>
        
      </main>
    </div>
  );
}

export default App;