import React from 'react';
import {
    FaDollarSign, FaArrowCircleDown, FaCog, FaCheckCircle, FaGift,
    FaExchangeAlt, FaMoneyCheckAlt, FaHistory, FaUserCheck, FaHandshake, FaChartLine
  } from 'react-icons/fa';
import './index.css';

const QuickLinks = () => {
  return (
    <>
    <h1>Quick Links</h1>
    <section className="quick-links">
      <div className="link-item">
        <FaDollarSign /> 
        <p>Deposit</p>
        </div>
      <div className="link-item"><FaArrowCircleDown />
      <p>Withdraw</p> </div>
      <div className="link-item"><FaCog /> <p>Settings</p></div>
      <div className="link-item"><FaCheckCircle /> <p>Verification</p></div>
      <div className="link-item"><FaGift /> <p>Bonuses</p></div>
      <div className="link-item"><FaExchangeAlt /><p>MTS</p></div>
      <div className="link-item"><FaMoneyCheckAlt /> <p>Transfer</p></div>
      <div className="link-item"><FaHistory /> <p>History</p></div>
      <div className="link-item"><FaUserCheck /><p>Partner</p></div>
      <div className="link-item"><FaHandshake /><p>Exchange</p></div>
      <div className="link-item"><FaChartLine /><p>Analytics</p></div>
    </section>
    </>
    
  );
};

export default QuickLinks;
