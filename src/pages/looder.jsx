import React from 'react';


const LoadingSpinner = () => (
  <div className="spinner-overlay">
    <div className="spinner-container">
      <div className="spinner-logo">Unique Interiors </div>
      <div className="spinner">
        <div className="double-bounce1"></div>
        <div className="double-bounce2"></div>
      </div>
      <p className="spinner-text"> Looding   please Wait  a Moment ...</p>
    </div>
  </div>
);

export default LoadingSpinner;