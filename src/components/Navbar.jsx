import React from "react";
import "../styles/navbar.css"; // Import CSS for Navbar

function Navbar() {
  return (
    <nav className="navbar">
      <button>Contact</button>
      <button>Resume</button>
      <button>About</button>
      <button>Skills</button>
      <button>Projects</button>
    </nav>
  );
}

export default Navbar;
