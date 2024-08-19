import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './index.css';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search..." />
      <FaSearch />
    </div>
  );
};

export default SearchBar;
