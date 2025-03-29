import React, { useState, useEffect, useRef } from "react";
import "../styles/about.css"; 
import jsLogo from "../assets/jslogo.jpg"; 
import reactLogo from "../assets/reactlogo.png";
import pythonLogo from "../assets/pythonlogo.png";
import figmaLogo from "../assets/figmalogo.png";
import htmlLogo from "../assets/htmllogo.png";
import clogo from "../assets/clogo.png";
import githublogo from "../assets/githublogo.png"
import m365logo from "../assets/m365logo.png"
import googlesearch from "../assets/google search.webp"
import javalogo from "../assets/java.jpg"

const techStack = [
  { id: 1, name: "JavaScript", logo: jsLogo, position: { top: "15%", left: "15%" } },
  { id: 2, name: "React", logo: reactLogo, position: { top: "10%", right: "20%" }, },
  { id: 3, name: "Google Search Console", logo: googlesearch, position: { bottom: "10%", left: "25%" } },
  { id: 4, name: "Figma", logo: figmaLogo, position: { bottom: "5%", right: "10%" } },
  { id: 5, name: "HTML", logo: htmlLogo, position: { bottom: "25%", left: "5%" } },
  { id: 6, name: "C", logo: clogo, position: { top: "45%", right: "15%" } },
  { id: 7, name: "Git", logo: githublogo, position: { top: "25%", right: "3%" } },
  { id: 8, name: "Microsoft 365", logo: m365logo, position: {bottom: "15%", right: "45%"}},
  { id: 9, name: "Python", logo:pythonLogo, position: {top:"3%", right:"5"}},
  { id: 10, name: "Java", logo:javalogo, position: {top:"30%", left:"5%"}}
];

function About() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 }
    );
  
    const currentRef = aboutRef.current;
  
    if (currentRef) {
      observer.observe(currentRef);
    }
  
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);
  
  useEffect(() => {
    if (isInView && visibleLines < 6) {
      const timeout = setTimeout(() => {
        setVisibleLines((prev) => prev + 1);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [isInView, visibleLines]);

  return (
    <div id="about" className="about-container" ref={aboutRef}>
      <h2 className="about-title">A little bit about me..</h2>
      {/* flying random logos - will have to revisit the structure */}
      {techStack.map((tech) => (
        <img 
          key={tech.id} 
          src={tech.logo} 
          alt={tech.name} 
          className="floating-logo" 
          style={tech.position} 
        />
      ))}

      {/* terminal-like display */}
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
          {visibleLines > 0 && <p className="output">"Orange County, CA"</p>}

          {visibleLines > 1 && <p className="command">&gt; education?</p>}
          {visibleLines > 1 && <p className="output">"University of California, Irvine - Computer Science"</p>}

          {visibleLines > 2 && <p className="command">&gt; interests?</p>}
          {visibleLines > 2 && <p className="output">["fashion", "travel", "food", "badminton", "running"]</p>}

          {visibleLines > 3 && <p className="command">&gt; daily thoughts?</p>}
          {visibleLines > 3 && <p className="output">"cool designs, debugging codes, picking outfits, and craving sushi- maybe simultaneously"</p>}

          {visibleLines > 4 && <p className="command">&gt; life motto?</p>}
          {visibleLines > 4 && <p className="output">"If you believe it, you can achieve it"</p>}

          {visibleLines > 5 && <p className="prompt">&gt;</p>}
        </div>
      </div>

      <div className="tech-stack-static">
        {techStack.map((tech) => (
          <div key={tech.id} className="logo-tooltip-wrapper">
            <img
              src={tech.logo}
              alt={tech.name}
              className="tech-logo-static"
            />
            <span className="tooltip-text">{tech.name}</span>
          </div>
        ))}
      </div>


    </div>
  );
}

export default About;