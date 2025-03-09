// LoadingSpinner.jsx
import React from 'react';


const LoadingSpinner = () => {
  return (
    <div className="spinner-container">
      {/* Text Animation */}
      <div className="brand-text">
        <span>U</span>
        <span>n</span>
        <span>i</span>
        <span>q</span>
        <span>u</span>
        <span>e</span>
        <span>&nbsp;</span>
        <span>I</span>
        <span>n</span>
        <span>t</span>
        <span>e</span>
        <span>r</span>
        <span>i</span>
        <span>o</span>
        <span>r</span>
        <span>s</span>
      </div>

      {/* Circle Loader */}
      <div className="circle-loader">
        <div className="spinner"></div>
      </div>

      {/* Dots Loader (alternative) */}
      {/* <div className="dots-loader">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div> */}
    </div>
  );
};

export default LoadingSpinner;