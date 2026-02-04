import React, { useState} from 'react';
import './Pay.css';

const Pay = () => {
  
  const [payments] = useState([
    { id: "TXN-101", user: "Arjun Mehta", service: "Cloud Migration", amount: "$450.00", date: "Feb 01, 2026", status: "Paid", method: "Visa" },
    { id: "TXN-102", user: "Emily Blunt", service: "Web Design", amount: "$1,200.00", date: "Feb 02, 2026", status: "Paid", method: "MasterCard" },
    { id: "TXN-103", user: "David Goggins", service: "Fitness Strategy", amount: "$150.00", date: "Feb 02, 2026", status: "Pending", method: "PayPal" },
    { id: "TXN-104", user: "Priya Rai", service: "Content Writing", amount: "$300.00", date: "Feb 03, 2026", status: "Paid", method: "Apple Pay" },
    { id: "TXN-105", user: "Sundar Pichai", service: "AI Strategy", amount: "$5,000.00", date: "Feb 04, 2026", status: "Paid", method: "Bank Transfer" },
  ]);

  return (
    <div className="admin-pay-page">
      <div className="pay-container">
        
        {/* Header Section - Centered */}
        <header className="pay-header">
          <h1>Payment Transactions</h1>
          <p>Overview of all incoming revenue and billing status</p>
        </header>

        {/* Stats Strip - Centered horizontally */}
        <div className="pay-stats-strip">
          <div className="pay-stat-box">
            <span>Total Revenue</span>
            <strong>$7,100.00</strong>
          </div>
          <div className="pay-stat-box">
            <span>Pending</span>
            <strong>$150.00</strong>
          </div>
          <div className="pay-stat-box">
            <span>Successful</span>
            <strong>48 Transactions</strong>
          </div>
        </div>

        {/* Table Section - Centered content */}
        <div className="pay-table-wrapper">
          <table className="pay-table">
            <thead>
              <tr>
                <th>Transaction ID</th>
                <th>Customer</th>
                <th>Service</th>
                <th>Amount</th>
                <th>Method</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((pay) => (
                <tr key={pay.id}>
                  <td className="txt-bold">{pay.id}</td>
                  <td>
                    <div className="pay-user-cell">
                      <div className="pay-avatar">{pay.user.charAt(0)}</div>
                      {pay.user}
                    </div>
                  </td>
                  <td>{pay.service}</td>
                  <td className="pay-amount">{pay.amount}</td>
                  <td>{pay.method}</td>
                  <td>
                    <span className={`pay-status ${pay.status.toLowerCase()}`}>
                      {pay.status}
                    </span>
                  </td>
                  <td>
                    <button className="pay-view-btn" onClick={() => alert(`Downloading Invoice for ${pay.id}`)}>
                      Invoice
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default Pay;