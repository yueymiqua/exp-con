import React from 'react';

function Perks() {
  return (
    <div className="perks-container">
      <div className="text-container">
        <h1 className="header-font">PERKS</h1>
      </div>
      <div className="perks-chart">
        <div className="column1">
          <h2 className="subtext-font perks-line">_____</h2>
          <h2 className="subtext-font">Subscription Payment Model</h2>
          <h3 className="description">No commitment, cancel anytime. Never worry about forgetting a payment again!</h3>
        </div>
        <div className="column2">
          <h2 className="subtext-font perks-line">_____</h2>
          <h2 className="subtext-font">No Fee Cancellation Policy</h2>
          <h3 className="description">No commitment, cancel anytime. Never worry about forgetting a payment again!</h3>
        </div>
        <div className="column3">
          <h2 className="subtext-font perks-line">_____</h2>
          <h2 className="subtext-font">Subscription Payment Model</h2>
          <h3 className="description">No commitment, cancel anytime. Never worry about forgetting a payment again!</h3>
        </div>
      </div>
    </div>
  );
}

export default Perks;