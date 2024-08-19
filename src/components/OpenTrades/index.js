import React from 'react';
import './index.css';

const OpenTrades = () => {
  return (
    <section className="open-trades">
      <h3>Open Trades</h3>
      <div className="trade">
        <p>EUR/USD</p>
        <p>Long</p>
        <p>+0.12</p>
        <p>$50.00</p>
      </div>
      <div className="trade">
        <p>USD/JPY</p>
        <p>Long</p>
        <p>-0.09</p>
        <p>-$9.00</p>
      </div>
      <div className="trade">
        <p>EUR/USD</p>
        <p>Short</p>
        <p>-1.09</p>
        <p>-$109.00</p>
      </div>
    </section>
  );
};

export default OpenTrades;
