import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import "../styles/project.css";
import tempTrends from "../assets/Temp-Trends.png";
import tiktok from "../assets/tiktok logo.webp";
import softwareImage from "../assets/SOFTWARE.png";
import logo from "../assets/j.png";
import pva from "../assets/pva.png";

const projects = [
  { id: 1, title: "Rubber-Cal TikTok Shop", description: "Managed influencer campaigns & ads", image: tiktok },
  { id: 2, title: "Website Content Retrieval", description: "Built an engine to retrieve & rank content", image: softwareImage },
  { id: 3, title: "This Portfolio", description: "Designed & developed this interactive portfolio", image: logo },
  { id: 4, title: "Real Estate PDF Parser", description: "Extracts structured data from real estate PDFs", image: pva },
  { id: 5, title: "Digital Wardrobe Assistant", description: "Personalized outfit recommendations using AI", image: tempTrends },
];

function Project() {
  const [activeIndex, setActiveIndex] = useState(2); // Start with the center project as active
  const projectRefs = useRef([]);

  const positions = [
    { x: "-30vw", y: "20vh", rotate: -15 }, // Bottom left
    { x: "-15vw", y: "-5vh", rotate: -10 }, // Middle left
    { x: "0vw", y: "-20vh", rotate: 0 },    // Center (should be active)
    { x: "15vw", y: "-5vh", rotate: 10 },   // Middle right
    { x: "30vw", y: "20vh", rotate: 15 },   // Bottom right
  ];

  useEffect(() => {
    projectRefs.current.forEach((el, index) => {
      if (el) {
        const projIndex = (index - activeIndex + 2 + projects.length) % projects.length;
        gsap.to(el, {
          x: positions[projIndex].x,
          y: positions[projIndex].y,
          rotate: positions[projIndex].rotate,
          duration: 0.8,
          ease: "power2.inOut",
        });
      }
    });
  }, [activeIndex]);

  const handleClick = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="projects-container">
      <div className="project-circle">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`project-item ${index === activeIndex ? "active" : ""}`}
            ref={(el) => (projectRefs.current[index] = el)}
            onClick={handleClick}
          >
            <img src={project.image} alt={project.title} className="project-thumbnail" />
          </div>
        ))}
      </div>

      {/* Display description for the active project in the center */}
      <div className="project-description-container">
        <h2 className="project-description-title">{projects[activeIndex].title}</h2>
        <p className="project-description-text">{projects[activeIndex].description}</p>
      </div>
    </section>
  );
}

export default Project;
