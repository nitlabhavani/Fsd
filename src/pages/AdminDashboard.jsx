import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AdminDashboard.css";

// IMPORT YOUR NEW COMPONENTS
// import UserDashboard from "./UserDashboard"; 
import Pay from "./Pay"; 
import Project from "./Project";
import Reports from "./Report";
import UserDashboard from "./UserDashboard";
import ProviderDashboard from "./ProviderDashboard";

function AdminDashboard() {
  // --- NAVIGATION STATE ---
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="admin-dashboard">

      {/* ================= SIDEBAR ================= */}
      <aside className="admin-sidebar">
        <h2 className="admin-logo">Skillora Admin</h2>

        <nav className="admin-nav">
          <button 
            className={activeTab === "dashboard" ? "active" : ""} 
            onClick={() => setActiveTab("dashboard")}
          >Dashboard</button>
          
          <button 
            className={activeTab === "users" ? "active" : ""} 
            onClick={() => setActiveTab("users")}
          >Users</button>
          
          <button 
            className={activeTab === "Provider" ? "active" : ""} 
            onClick={() => setActiveTab("Provider")}
          >Provider</button>
          
          <button 
            className={activeTab === "projects" ? "active" : ""} 
            onClick={() => setActiveTab("projects")}
          >Projects</button>
          
          <button 
            className={activeTab === "payments" ? "active" : ""} 
            onClick={() => setActiveTab("payments")}
          >Payments</button>
          
          <button 
            className={activeTab === "reports" ? "active" : ""} 
            onClick={() => setActiveTab("reports")}
          >Reports</button>
          
          <Link to="/" className="logout-link">Logout</Link>
        </nav>
      </aside>

      {/* ================= MAIN CONTENT AREA ================= */}
      <main className="admin-main">
        
        {/* CONDITIONAL RENDERING BASED ON TAB */}
        
        {activeTab === "dashboard" && (
          <>
            <header className="admin-header">
              <h1>Dashboard Overview</h1>
              <span>Admin Panel</span>
            </header>

            <section className="admin-stats">
              <div className="admin-card">
                <h3>Total Users</h3>
                <p>12,450</p>
              </div>
              <div className="admin-card">
                <h3>Freelancers</h3>
                <p>7,320</p>
              </div>
              <div className="admin-card">
                <h3>Active Projects</h3>
                <p>1,284</p>
              </div>
              <div className="admin-card">
                <h3>Total Revenue</h3>
                <p>$245,000</p>
              </div>
            </section>

            <section className="admin-section">
              <h2>Recent Activity</h2>
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>User</th>
                    <th>Freelancer</th>
                    <th>Role</th>
                    <th>Action</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>John Doe</td>
                    <td>Client</td>
                    <td>Posted Project</td>
                    <td className="status success">Completed</td>
                  </tr>
                  <tr>
                    <td>Sarah Smith</td>
                    <td>Freelancer</td>
                    <td>Submitted Proposal</td>
                    <td className="status pending">Pending</td>
                  </tr>
                </tbody>
              </table>
            </section>
          </>
        )}

        {/* LOADING EXTERNAL COMPONENTS */}
        {activeTab === "users" && <UserDashboard />}
        {activeTab === "Provider" && <ProviderDashboard/>}
        {activeTab === "projects" && <Project />}
        {activeTab === "payments" && <Pay />}
        {activeTab === "reports" && <Reports />}

      </main>
    </div>
  );
}

export default AdminDashboard;