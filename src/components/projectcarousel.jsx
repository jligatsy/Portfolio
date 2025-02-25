"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import styles from "../styles/Carousel.module.css";

const projects = [
  {
    id: 1,
    title: "Project One",
    type: "Webpage w/ UI Focus",
    description: ["Desc 1", "Desc 2", "Desc 3"],
    tech: ["HTML", "CSS", "JS"],
  },
  {
    id: 2,
    title: "Project Two",
    type: "Mobile App",
    description: ["Feature A", "Feature B", "Feature C"],
    tech: ["React Native", "Firebase", "Expo"],
  },
  {
    id: 3,
    title: "Project Three",
    type: "E-commerce Platform",
    description: ["Shopping Cart", "User Profiles", "Payment Gateway"],
    tech: ["Next.js", "MongoDB", "Stripe"],
  },
  {
    id: 4,
    title: "Project Four",
    type: "Data Visualization",
    description: ["Charts", "Real-time Data", "Interactive UI"],
    tech: ["D3.js", "React", "Node.js"],
  },
  {
    id: 5,
    title: "Project Five",
    type: "Game Development",
    description: ["Physics Engine", "AI Bots", "Multiplayer"],
    tech: ["Unity", "C#", "Photon"],
  },
];

export default function ProjectCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Rotate carousel manually
  const rotateLeft = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const rotateRight = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  return (
    <div className={styles.carousel}>
      {/* Project Cards */}
      <div className={styles.projectContainer}>
        {projects.map((project, index) => {
          // Calculate rotation angle for the globe effect
          const angle = ((index - activeIndex) * 30) % 360;

          return (
            <motion.div
              key={project.id}
              className={styles.projectCard}
              animate={{
                rotate: angle,
                scale: index === activeIndex ? 1.2 : 1,
                opacity: index === activeIndex ? 1 : 0.6,
              }}
              transition={{ duration: 0.5 }}
            >
              <div className={styles.thumbnail}></div>
            </motion.div>
          );
        })}
      </div>

      {/* Rotation Controls */}
      <div className={styles.controls}>
        <button onClick={rotateLeft}>←</button>
        <button onClick={rotateRight}>→</button>
      </div>

      {/* Project Details */}
      <div className={styles.description}>
        <h2>{projects[activeIndex].title}</h2>
        <p><strong>Project Type:</strong> {projects[activeIndex].type}</p>
        <ul>
          {projects[activeIndex].description.map((desc, i) => (
            <li key={i}>→ {desc}</li>
          ))}
        </ul>
        <div className={styles.techStack}>
          {projects[activeIndex].tech.map((tech, i) => (
            <span key={i} className={styles.tech}>{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
