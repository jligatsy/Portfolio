import React from "react";
import "../styles/about.css"; // Import CSS

function About() {
  return (
    <div className="terminal-window">
      <div className="terminal-header">
        <div className="buttons">
          <span className="close"></span>
          <span className="minimize"></span>
          <span className="maximize"></span>
        </div>
      </div>
      <div className="terminal-body">
        <p className="command">&gt; location?</p>
        <p className="output">"Irvine, CA"</p>

        <p className="command">&gt; education?</p>
        <p className="output">"University of California, Irvine - Computer Science"</p>

        <p className="command">&gt; interests?</p>
        <p className="output">["fashion", "travel", "badminton"]</p>

        <p className="command">&gt; life motto?</p>
        <p className="output">"If you believe it, you can achieve it"</p>

        <p className="prompt">&gt;</p>
      </div>
    </div>
  );
}

export default About;
