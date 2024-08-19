import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import QuickLinks from './components/QuickLinks';
import Overview from './components/Overview';
import TradingAccounts from './components/Trading';
import OpenTrades from './components/OpenTrades';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className='combine-container'>
          <div className='left-container'>
            <QuickLinks />
            <Overview />
          </div>
          <div className="right-panel">
            <TradingAccounts />
            <OpenTrades />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
