import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import "../styles/project.css";
import tempTrends from "../assets/temptrendlogo.png";
import tiktok from "../assets/tiktoklogo.png";
import softwareImage from "../assets/SOFTWARE.png";
import logo from "../assets/j.png";
import pva from "../assets/pva.png";

const projects = [
  { 
    id: 1, 
    title: "Rubber-Cal TikTok Shop", 
    description: [
      "Led and managed Rubber-Cal’s TikTok Shop, optimizing 280+ product listings for better visibility and sales.",
      "Developed a unified fulfillment process, integrating the CRM-ERP system and consolidating data using Microsoft 365, ensuring on-time deliveries.",
      "Coordinated ad campaigns with the content team, leveraging affiliate and influencer marketing to boost engagement and product sales."
    ], 
    tags : ["CRM-ERP", "Microsoft 365", "Canva", 'NetSuite'],
    image: tiktok 
  },
  { 
    id: 2, 
    title: "Website Content Retrieval", 
    description: [
      "Implemented an inverted index to process and retrieve data from 56,000+ web pages, achieving <300ms query response times.",
      "Developed a Boolean retrieval system with TF-IDF  ranking, optimizing indexed and search performance.",
      "Collaborated with a team of 4, using GitHub for version control and conducting iterative testing to refine the search accuracy."
    ], 
    tags : ["Python", "Beautiful Soup", "Github"],
    image: softwareImage 
  },
  { 
    id: 3, 
    title: "This Portfolio", 
    description: [
      "Designed and developed this interactive personal portfolio website using Figma, React JSX, and CSS, incorporating dynamic visual elements to enhance user engagement.",
      "Implemented dynamic animations using GSAP, used MUI libraries, and CSS for consistency in layout and styles.",
      "Deployed the portfolio through Vercel with a custom domain, configuring DNS records, ultimately ensuring responsive and consistent performance."
    ], 
    tags : ["React JSX", "CSS", "Figma"],
    image: logo 
  },
  { 
    id: 4, 
    title: "Real Estate PDF Parser", 
    description: [
      "Build an internal PDF parsing web application that automates data extraction to reduce manual intervention and accelerate document processing.",
      "A system capable of processing multiple real estate documents simultaneously, converting them into JSON, through the use of APIs, Tesseract OCR, and ChromaDB.",
      "Designed and developed the front-end with Figma for UI/UX and implementing it in React (JSX), receiving continuous feedback from cross-functional teams."
    ], 
    tags : ["Python", "ChromaDB", "Figma", "React JS", "OCR", "Github"],
    image: pva
  },
  { 
    id: 5, 
    title: "Digital Wardrobe Assistant", 
    description: [
      "Built a web app that provides real-time weather updates and personalized outfit recommendation.",
      "Integrated a weather API to retrieve the weather data of cities around the world.",
      "Collaborated with a team member, conducting test cases to ensure functionality and performance."
    ], 
    tags : ["Figma", "HTML", "CSS", "JS", "Github"],
    image: tempTrends 
  },
];

function Project() {
  const [activeIndex, setActiveIndex] = useState(2); // start with the center project as active
  const projectRefs = useRef([]);

  const positions = [
    { x: "-30vw", y: "20vh", rotate: -15 }, //bottom left
    { x: "-15vw", y: "-5vh", rotate: -10 }, //middle left
    { x: "0vw", y: "-20vh", rotate: 0 },    //center (should be active)
    { x: "15vw", y: "-5vh", rotate: 10 },   //middle right
    { x: "30vw", y: "20vh", rotate: 15 },   //bottom right
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
      <h1 className="projects-title">Projects</h1>
      <p className="projects-subtitle">
        Here are some of the projects I have designed, developed, or collaborated on.
        <br></br>
        Click on any project to reveal its details! 
        <br></br>
        p.s. The projects rotate dynamically.
      </p>

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
      <div className="project-description-container">
        <h2 className="project-description-title">{projects[activeIndex].title}</h2>
        <div className="project-description-list">
          <ul>
          {projects[activeIndex].description.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
          </ul>
          <div className="project-desc-tags">
            {projects[activeIndex].tags.map((tag, i) => <span key={i} className="project-desc-tag">{tag}</span>)}
          </div>
        </div>
      </div>

    </section>
  );
}

export default Project;


/* 
 <div className="job-details">
                  <div className="job-description">
                    <ul>
                      {exp.description.map((desc, i) => <li key={i}>{desc}</li>)}
                    </ul>
                    <div className="job-tags">
                      {exp.tags.map((tag, i) => <span key={i} className="job-tag">{tag}</span>)}
                    </div>
                  </div>
                  <div className="job-logo-container">
                    <img src={exp.logo} alt={`${exp.company} logo`} className="job-logo" />
                  </div>
                </div>       
                
*/