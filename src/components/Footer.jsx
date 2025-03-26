import React from "react";
import "../styles/footer.css";

function Footer() {
  return (
    <div className="footer">
      {/* SVG curve at the top of the footer */}
      <div className="footer-curve">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path
            d="M0,0 C480,100 960,100 1440,0 L1440,100 L0,100 Z"
            fill="white"
          />
        </svg>
      </div>

      <div className="footer-text">
        Designed & developed by Josephine ✦ © 2025
      </div>
    </div>
  );
}

export default Footer;
