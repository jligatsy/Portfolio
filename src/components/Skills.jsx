import React, { useState, useEffect, useRef } from "react";
import "../styles/skills.css"; // Make sure to create this file
import gsap from "gsap";

const experiences = [
  { year: "21", title: "PT. Kreasi Media Utama", role: "Public Relations Intern", 
    description: "Networked with up to 40 customers and external parties through digital platforms like Whatsapp and Email, increasing brand recognition and preserving well-established connections. Assisted in handling daily operations of the PR Department, managing the publishing editorial of the brand."
  },
  { year: "22", title: "Tanakaya Soba, Tustin", role: "Server", 
    description: "Providing service to fulfill the needs of about 100+ parties per day by helping them to place, receive, and pay for their orders. Operating the restaurant's POS system daily to input and manage orders, maintaining a high level of accuracy and efficiency."
  },
  { year: "23", title: "Code Ninjas", role: "Coding Instructor", 
    description: "Mentoring children ages 5 to 14 in coding fundamentals through engaging and age-appropriate lessons. Supervising 20+ kids per day by providing guidance throughout the educational process and tailoring support to individual needs."
  },
];

function Skills() {
  const [activeIndex, setActiveIndex] = useState(1); // Start with 2022
  const descriptionRef = useRef(null);

  useEffect(() => {
    // Animate text change
    if (descriptionRef.current) {
      gsap.fromTo(
        descriptionRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.5 }
      );
    }
  }, [activeIndex]);

  return (
    <section id="skills" className="skills-container">
      <div className="year-static">20</div>

      <div className="year-list">
        {experiences.map((exp, index) => (
          <div
            key={exp.year}
            className={`year-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
          >
            {exp.year}
          </div>
        ))}
      </div>

      <div className="experience-description" ref={descriptionRef}>
        <h2>{experiences[activeIndex].title}</h2>
        <h3>{experiences[activeIndex].role}</h3>
        <p>{experiences[activeIndex].description}</p>
      </div>
    </section>
  );
}

export default Skills;
