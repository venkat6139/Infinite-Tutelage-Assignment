import React from 'react';
import {
  FaHome, FaUserFriends, FaExchangeAlt, FaWallet,
  FaChartBar, FaHistory, FaBell, FaCog, FaQuestionCircle, FaSignOutAlt, FaUserCircle
} from 'react-icons/fa';
import './index.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo">
        <img src='https://raw.githubusercontent.com/Maheshwarm-Shivani/Infinite-Tutelage-Assignment/f54a1dbbdbc63b256dd78b49795328d8995ccda9/src/assets/react.svg' alt='logo'/>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li className="active"><FaHome /> Dashboard</li>
          <li><FaUserFriends /> CRM</li>
          <li><FaExchangeAlt /> MAM</li>
          <li><FaChartBar /> PAMM</li>
          <li><FaWallet /> Trade</li>
          <li><FaWallet /> Wallet</li>
          <li><FaChartBar /> Accounts</li>
          <li><FaHistory /> History</li>
        </ul>
      </nav>
      <div className="sidebar-footer">
        <ul>
          <li><FaBell /> Notifications</li>
          <li><FaCog /> Settings</li>
          <li><FaQuestionCircle /> Help & Support</li>
          <li><FaSignOutAlt /> Log Out</li>
        </ul>
        <div className="user-info">
          <FaUserCircle className="user-icon" />
          <div>
            <p>Shyam Shakur</p>
            <p>shyam@shakur.com</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
