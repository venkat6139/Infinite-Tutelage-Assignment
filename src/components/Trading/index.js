import React from 'react';
import './index.css';

const TradingAccounts = () => {
  return (
    <section className="trading-accounts">
      <h3>Trading Accounts</h3>
      <div className="account">
        <p>Master Account</p>
        <h4>CTicker #123456</h4>
        <p className='para'>0.00 USD</p>
      </div>
      <div className="account">
        <p>Master Account</p>
        <h4>CTicker #987654</h4>
        <p className='para'>0.00 USD</p>
      </div>
    </section>
  );
};

export default TradingAccounts;
