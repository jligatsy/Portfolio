import React, { useRef, useState } from "react";
import "../styles/project.css";
import { FaExternalLinkAlt } from "react-icons/fa";
import pilly from "../assets/pillylogo.png";
import tempTrends from "../assets/temptrendlogo.png";
import softwareImage from "../assets/SOFTWARE.png";
import logo from "../assets/j.png";
import pva from "../assets/pva.png";

const projects = [
  {
    id: 1,
    title: "Pilly",
    subtitle: "2nd place UCI 2025 Design-A-Thon",
    description: [
      "Reimagining daily medication routines to be more accessible to everyone, especially for seniors and those with sensory impairments.",
      "Pilly is a smart pill dispenser designed with inclusivity and simplicity in mind, ultimately making medication management intuitive for all.",
      "Focusing on clarity, accessibility, and trust through the usage of voice interfaces and a mascot for empathetic UX.",
    ],
    tags: ["Figma", "Devpost"],
    links: {
      Figma: "https://www.figma.com/design/kANUYBo3sayVl97II2zMf6/PILLY?node-id=0-1&p=f&t=Q6MThMrWRsZPswCJ-0",
      Devpost: "https://devpost.com/software/pilly-kbw8tm?ref_content=my-projects-tab&ref_feature=my_projects"
    },
    image: pilly,
  },
  {
    id: 2,
    title: "This Portfolio",
    subtitle: "Showcase of Personal Projects and Experience",
    description: [
      "Designed and developed this interactive personal portfolio website using Figma, React JSX, and CSS to enhance user engagement.",
      "Deployed the portfolio through Vercel with a custom domain, configuring DNS records, ultimately ensuring responsive and consistent performance.",
    ],
    tags: ["React JSX", "CSS", "Figma"],
    links: {
      "React JSX": "https://www.josephineligatsyah.com"
    },
    image: logo,
  },
  {
    id: 3,
    title: "Website Content Retrieval",
    subtitle: "Computer Science (Information Retrieval) Project", 
    description: [
      "Implemented an inverted index to process and retrieve data from 56,000+ web pages, achieving <300ms query response times.",
      "Developed a Boolean retrieval system with TF-IDF ranking, optimizing indexed and search performance.",
      "Collaborated with a team of 4, using GitHub for version control and conducting iterative testing to refine the search accuracy.",
    ],
    tags: ["Github", "Python", "Beautiful Soup"],
    links: {
      Github: "https://github.com/jligatsy"
    },
    image: softwareImage,
  },
  {
    id: 4,
    title: "Real Estate PDF Parser",
    subtitle: "Software Engineer Intern (Capstone Project)",
    description: [
      "Build an internal PDF parsing web application that automates data extraction to accelerate document processing.",
      "A system capable of processing multiple real estate documents simultaneously, converting them into JSON, through the use of APIs, Tesseract OCR, and ChromaDB.",
      "Designed the front-end with Figma for UI/UX and implementing it in React JSX, receiving continuous feedback from cross-functional teams.",
    ],
    tags: ["Github","Python", "Figma", "React"],
    links: {
      Github: "https://github.com/jligatsy"
    },
    image: pva,
  },
  {
    id: 5,
    title: "Digital Wardrobe Assistant",
    subtitle: "Informatics (UI Software) Project",
    description: [
      "Built a platform that provides real-time weather updates and personalized outfit recommendation.",
      "Integrated a weather API to retrieve the weather data of cities around the world and suggest outfits accordingly.",
      "Collaborated with a team member, conducting test cases to ensure functionality and performance.",
    ],
    tags: ["Github", "WeatherApi", "Figma", "HTML", "CSS", "JS"],
    links: {
      Github: "https://github.com/jligatsy"
    },
    image: tempTrends,
  },
];

function Project() {
  const containerRef = useRef(null);
  const [flippedCards, setFlippedCards] = useState([]);

  const scroll = (direction) => {
    const container = containerRef.current;
    const scrollAmount = container.offsetWidth;
    container.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
  };

  const isExternal = (url) => {
    return !url.includes("github.com");
  };

  const toggleCard = (index) => {
    setFlippedCards((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section id="projects" className="projects-carousel-container">
      <h2 className="carousel-title">Projects</h2>
      <p className="carousel-subtitle">Click on each image to learn more!</p>

      <div className="carousel-wrapper">
        <div className="carousel-cards" ref={containerRef}>
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card ${flippedCards.includes(index) ? "flipped" : ""}`}
              onClick={() => !flippedCards.includes(index) && toggleCard(index)}
            >
              <div className="card-inner">
                <div className="card-front">
                  <img src={project.image} alt={project.title} className="project-image" />
                </div>
                <div className="card-back" onClick={(e) => e.stopPropagation()}>
                  <button className="close-btn" onClick={() => toggleCard(index)}>×</button>
                  <h3>{project.title}</h3>
                  {project.subtitle && <h4 className="card-subtitle"><em>{project.subtitle}</em></h4>}
                  <ul className="card-desc">
                    {project.description.map((line, i) => (
                      <li key={i}>{line}</li>
                    ))}
                  </ul>
                  <div className="card-tags">
                    {project.tags.map((tag, i) => {
                      const link = project.links?.[tag];
                      return link ? (
                        <a
                          key={i}
                          className="card-tag"
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {tag} {isExternal(link) && <FaExternalLinkAlt size={12} style={{ marginLeft: 6 }} />}
                        </a>
                      ) : (
                        <span key={i} className="card-tag">{tag}</span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="carousel-nav">
          <button className="scroll-arrow left" onClick={() => scroll("left")}>&larr;</button>
          <button className="scroll-arrow right" onClick={() => scroll("right")}>&rarr;</button>
        </div>
      </div>
    </section>
  );
}

export default Project;
