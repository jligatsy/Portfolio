import React, { useState, useEffect } from "react";
import "../styles/about.css"; 
import jsLogo from "../assets/jslogo.jpg"; // Add your logos
import reactLogo from "../assets/reactlogo.png";
import pythonLogo from "../assets/pythonlogo.png";
import figmaLogo from "../assets/figmalogo.png";
import htmlLogo from "../assets/htmllogo.png";
import clogo from "../assets/clogo.png";
import githublogo from "../assets/githublogo.png"
import m365logo from "../assets/m365logo.png"
import googlesearch from "../assets/google search.webp"

const techStack = [
  { id: 1, name: "JavaScript", logo: jsLogo, position: { top: "15%", left: "15%" } },
  { id: 2, name: "React", logo: reactLogo, position: { top: "5%", right: "20%" }, },
  { id: 3, name: "googlesearch", logo: googlesearch, position: { bottom: "10%", left: "25%" } },
  { id: 4, name: "Figma", logo: figmaLogo, position: { bottom: "5%", right: "10%" } },
  { id: 5, name: "HTML", logo: htmlLogo, position: { bottom: "40%", left: "5%" } },
  { id: 6, name: "C", logo: clogo, position: { top: "35%", right: "15%" } },
  { id: 7, name: "github", logo: githublogo, position: { top: "25%", right: "3%" } },
  { id: 8, name: "m365", logo: m365logo, position: {bottom: "15%", right: "45%"}},
  { id: 9, name: "Python", logo:pythonLogo, position: {top:"3%", right:"5"}}
];

function About() {
  const [visibleLines, setVisibleLines] = useState(0);
  const delay = 500; // Delay for typing effect

  useEffect(() => {
    if (visibleLines < 5) { 
      setTimeout(() => setVisibleLines(visibleLines + 1), delay);
    }
  }, [visibleLines]);

  return (
    <div className="about-container">
      {/* Floating Logos */}
      {techStack.map((tech) => (
        <img 
          key={tech.id} 
          src={tech.logo} 
          alt={tech.name} 
          className="floating-logo" 
          style={tech.position} 
        />
      ))}

      {/* Terminal Window */}
      <div className="terminal-window">
        <div className="terminal-header">
          <div className="buttons">
            <span className="close"></span>
            <span className="minimize"></span>
            <span className="maximize"></span>
          </div>
        </div>
        <div className="terminal-body">
          {visibleLines > 0 && <p className="command">&gt; location?</p>}
          {visibleLines > 0 && <p className="output">"Irvine, CA"</p>}

          {visibleLines > 1 && <p className="command">&gt; education?</p>}
          {visibleLines > 1 && <p className="output">"University of California, Irvine - Computer Science"</p>}

          {visibleLines > 2 && <p className="command">&gt; interests?</p>}
          {visibleLines > 2 && <p className="output">["fashion", "travel", "food", "badminton", "running"]</p>}

          {visibleLines > 3 && <p className="command">&gt; life motto?</p>}
          {visibleLines > 3 && <p className="output">"If you believe it, you can achieve it"</p>}

          {visibleLines > 4 && <p className="prompt">&gt;</p>}
        </div>
      </div>
    </div>
  );
}

export default About;
