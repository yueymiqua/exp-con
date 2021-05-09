import React from 'react';

function PerksDarkTheme() {
  return (
    <div className="perks-container dark">
      <div className="perks-button">
        <a href="/pricing" class="btn-mix" data-text="TRY IT NOW">TRY IT NOW</a>
      </div>  
      <div className="text-container-dark">
        <h1 className="header-font">PERKS</h1>
      </div>
      <div className="perks-chart">
        <div className="column1">
          <h2 className="subtext-font perks-line red">_____</h2>
          <h2 className="subtext-font red">Subscription Payment Model</h2>
          <h3 className="description white">No commitment, cancel anytime. Never worry about forgetting a payment again!</h3>
        </div>
        <div className="column2">
          <h2 className="subtext-font perks-line teal">_____</h2>
          <h2 className="subtext-font teal">No Fee Cancellation Policy</h2>
          <h3 className="description white">No commitment, cancel anytime. Never worry about forgetting a payment again!</h3>
        </div>
        <div className="column3">
          <h2 className="subtext-font perks-line yellow">_____</h2>
          <h2 className="subtext-font yellow">Subscription Payment Model</h2>
          <h3 className="description white">No commitment, cancel anytime. Never worry about forgetting a payment again!</h3>
        </div>
      </div>
    </div>
  );
}

export default PerksDarkTheme;