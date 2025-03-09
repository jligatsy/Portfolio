import React, { useState, useEffect } from "react";
import "../styles/about.css"; // Import CSS

function About() {
  const [visibleLines, setVisibleLines] = useState(0);
  const delay = 500; // Delay in milliseconds for each line to appear

  useEffect(() => {
    if (visibleLines < 5) { // Update the number if you add more lines
      setTimeout(() => setVisibleLines(visibleLines + 1), delay);
    }
  }, [visibleLines]);

  return (
    <section id = "about" className = "about-container">
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
        {visibleLines > 2 && <p className="output">["fashion", "travel", "badminton"]</p>}

        {visibleLines > 3 && <p className="command">&gt; life motto?</p>}
        {visibleLines > 3 && <p className="output">"If you believe it, you can achieve it"</p>}

        {visibleLines > 4 && <p className="prompt">&gt;</p>}
      </div>
    </div>
    </section>
  );
}

export default About;
