import React from 'react';

function PricingLayout() {
  return (
    <div className="pricing-container">
      <div className="text-container">
        <h1 className="header-font">PRICING</h1>
        <h2 className="subtext-font">Test out our app today! Choose from three subscription</h2>
        <h2 className="subtext-font">Based payment models.</h2>
      </div>
      <div className="plan-container">
        <div className="basic-plan">
          <div>
            <h2 className="subtext-font basic-title">BASIC</h2>
            <h2 className="subtext-font basic-line">_____________</h2>
            <h2 className="subtext-font basic-monthly">MONTHLY</h2>
          </div>
          <h1 className="price-font basic-price">$9</h1>
          <ul className="list-container">
            <li className="subtext-font">Very good</li>
            <li className="subtext-font">Amazing</li>
            <li className="subtext-font">Perfect job</li>
            <li className="subtext-font">Love this</li>
            <li className="subtext-font">It's so good</li>
            <li className="subtext-font">Features</li>
          </ul>
          <button className="select-plan basic"><strong>SELECT</strong></button>
        </div>
        <div className="advanced-plan">
          <div>
            <h2 className="subtext-font advanced-title">ADVANCED</h2>
            <h2 className="subtext-font advanced-line">_____________</h2>
            <h2 className="subtext-font advanced-monthly">MONTHLY</h2>
          </div>
          <h1 className="price-font advanced-price">$99</h1>
          <ul className="list-container">
            <li className="subtext-font">Very good</li>
            <li className="subtext-font">Amazing</li>
            <li className="subtext-font">Perfect job</li>
            <li className="subtext-font">Love this</li>
            <li className="subtext-font">It's so good</li>
            <li className="subtext-font">Features</li>
          </ul>
          <button className="select-plan advanced"><strong>SELECT</strong></button>
        </div>
        <div className="pro-plan">
          <div>
            <h2 className="subtext-font pro-title">PRO</h2>
            <h2 className="subtext-font pro-line">_____________</h2>
            <h2 className="subtext-font pro-monthly">MONTHLY</h2>
          </div>
          <h1 className="price-font pro-price">$120</h1>
          <ul className="list-container">
            <li className="subtext-font">Very good</li>
            <li className="subtext-font">Amazing</li>
            <li className="subtext-font">Perfect job</li>
            <li className="subtext-font">Love this</li>
            <li className="subtext-font">It's so good</li>
            <li className="subtext-font">Features</li>
          </ul>
          <button className="select-plan pro"><strong>SELECT</strong></button>
        </div>
      </div>
    </div>
  );
}

export default PricingLayout;