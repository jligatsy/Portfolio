import React from "react";
import "../styles/navbar.css";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Navbar() {
  const handleNavClick = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        {/* WILL HAVE TO CHECK AGAIN */}
        <a
          href="mailto:josephineligatsyah@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          title="Hi Josephine, let's connect!"
        >
          <MailOutlineIcon fontSize="large" />
        </a>

        <a
          href="http://linkedin.com/in/josephine-ligatsyah-71756a21b"
          target="_blank"
          rel="noopener noreferrer"
          title="Visit LinkedIn"
        >
          <LinkedInIcon fontSize="large" />
        </a>
      </div>

      <div className="navbar-right">
        <a href="#about" onClick={(e) => handleNavClick(e, "about")}>About</a>
        <a href="#projects" onClick={(e) => handleNavClick(e, "projects")}>Projects</a>
        <a href="#experiences" onClick={(e) => handleNavClick(e, "experiences")}>Experiences</a>
        <a href="/RESUME OF JOSEPHINE LIGATSYAH.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
      </div>
    </nav>
  );
}

export default Navbar;
