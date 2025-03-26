// components/WaveDivider.jsx
import React from "react";

function WaveDivider({ flip = false }) {
  return (
    <div className="wave-divider">
      <svg
        viewBox="0 0 1440 150"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className={flip ? "flip" : ""}
      >
        <path
          d="M0,80 C360,160 1080,0 1440,80 L1440,0 L0,0 Z"
          fill="#f4f4f4" 
        />
      </svg>
    </div>
  );
}

export default WaveDivider;
