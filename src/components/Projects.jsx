import React, { useState } from "react";
import "../styles/projects.css";
import projectImage from "../assets/download.jpg"; // Placeholder image

const projects = [
  { title: "Project A", description: ["Desc 1", "Desc 2", "Desc 3"], type: "Webpage", focus: "UI/UX", tools: ["HTML", "CSS", "JavaScript"] },
  { title: "Project B", description: ["Feature 1", "Feature 2", "Feature 3"], type: "Mobile App", focus: "User Experience", tools: ["React Native", "Figma", "Firebase"] },
  { title: "Project C", description: ["Function 1", "Function 2", "Function 3"], type: "E-commerce", focus: "Conversion Optimization", tools: ["Next.js", "Stripe", "MongoDB"] },
  { title: "Project D", description: ["Aspect 1", "Aspect 2", "Aspect 3"], type: "Game Development", focus: "3D Design", tools: ["Unity", "C#", "Blender"] },
  { title: "Project E", description: ["Component 1", "Component 2", "Component 3"], type: "AI Model", focus: "Machine Learning", tools: ["Python", "TensorFlow", "OpenCV"] }
];

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(2);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="projects-container">
      <h2 className="section-title">Projects</h2>
      <div className="carousel">
        {projects.map((project, index) => {
          const position = index - currentIndex;
          return (
            <div
              key={index}
              className={`carousel-item ${index === currentIndex ? "active" : ""}`}
              style={{ transform: `rotateY(${position * 20}deg) translateZ(300px) translateY(20px)`, cursor: "pointer" }}
              onClick={() => handleClick(index)}
            >
              <img src={projectImage} alt={project.title} className="project-image" />
            </div>
          );
        })}
      </div>
      <div className="project-info">
        <h3 className="project-title">{projects[currentIndex].title}</h3>
        <p className="project-type">
          <strong>Project Type:</strong> {projects[currentIndex].type} <br />
          <span>{projects[currentIndex].focus}</span>
        </p>
        <div className="project-tools">
          {projects[currentIndex].tools.map((tool, i) => (
            <span key={i} className="tool">{tool}</span>
          ))}
        </div>
        <div className="project-description">
          <strong>Main Description:</strong>
          <ul>
            {projects[currentIndex].description.map((desc, i) => (
              <li key={i}>› {desc}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Projects;
