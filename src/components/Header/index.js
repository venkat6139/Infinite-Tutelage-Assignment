import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './index.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Dashboard</h1>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <FaSearch />
      </div>
    </header>
  );
};

export default Header;
