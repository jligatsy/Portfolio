import React, { useState, useEffect } from "react";
import "../styles/home.css"; // Import CSS
import "../styles/global.css"
import profilePic from "../assets/josephine.jpg"; // Import the image

function Home() {
  const [name, setName] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const fullName = "Josephine Ligatsyah";
  const typingSpeed = 200; 

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= fullName.length) {
        setName(fullName.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id= "home" className="home">
      <img src={profilePic} alt="Josephine Ligatsyah" className="profile-image" />
      <h1 className="name">
        {name}
        <span className={`cursor ${isTyping ? "fast-blink" : "slow-blink"}`}>|</span>
      </h1>
      <p className="bio">
        Hello! 😊
        <br></br>
        I code, design, and optimize. 
        <br></br>
        Passionate about user experience and product strategy, but also on a mission to exercise more (still figuring out if badminton counts as cardio). 
        Let’s make cool things happen!✨
      </p>
    </section>
  );
}

export default Home;
