import React from "react";
import "../styles/navbar.css"; // Import CSS

function Navbar() {
  const handleNavClick = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      <a href="#contact" onClick={(e) => handleNavClick(e, "contact")}>Contact</a>
      <a href="#resume" onClick={(e) => handleNavClick(e, "resume")}>Resume</a>
      <a href="#about" onClick={(e) => handleNavClick(e, "about")}>About</a>
      <a href="#projects" onClick={(e) => handleNavClick(e, "projects")}>Projects</a>
      <a href="#experiences" onClick={(e) => handleNavClick(e, "experiences")}>Experiences</a>
    </nav>
  );
}

export default Navbar;
