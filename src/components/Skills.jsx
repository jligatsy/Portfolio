import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/skills.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    year: "25'",
    title: "Partner Engineering and Science, Irvine, CA",
    role: "Software Engineering Intern",
    description: [
      "Developing a PDF parsing system as part of a full-stack team, optimizing data extraction.",
      "Leveraging UI design tools, API integration, and database workflows to develop an internal web app.",
      "Implementing Agile methodologies, testing frameworks, and cloud-based deployment strategies."
    ]
  },
  {
    year: "24'",
    title: "Rubber-Cal, Fountain Valley, CA",
    role: "Data Operations Analyst (Part-Time)",
    description: [
      "Analyzing ads performance for 630+ products, increasing e-commerce sales by 11%.",
      "Developed campaign management models, improving marketing efficiency by 17%.",
      "Managing inventory tracking for 8500+ SKUs, achieving 93% accuracy in data processing."
    ]
  },
  {
    year: "23'",
    title: "Code Ninjas, Irvine, CA",
    role: "Coding and STEM Instructor",
    description: [
      "Mentored 20+ children daily in coding fundamentals through engaging lessons.",
      "Conducted complimentary trials, increasing student enrollment by 14%.",
      "Collaborated with mentors and administrators to develop interactive learning strategies."
    ]
  },
  {
    year: "22'",
    title: "Tanakaya Soba, Tustin, CA",
    role: "Restaurant Server",
    description: [
      "Assisted 100+ parties per day with ordering and payments.",
      "Maintained customer service standards, increasing positive feedback by 20%.",
      "Managed POS system and coordinated with waitstaff for seamless service."
    ]
  },
  {
    year: "21'",
    title: "PT. Kreasi Media Utama, DKI Jakarta, Indonesia",
    role: "Public Relations Intern",
    description: [
      "Networked with 40+ customers, increasing brand recognition.",
      "Assisted PR department in editorial management and media relations.",
      "Executed PR campaigns, boosting engagement by 17%."
    ]
  }
];

function Skills() {
  const containerRef = useRef(null);
  const yearRefs = useRef([]);
  const descRefs = useRef([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Detects when at least 10% of the section is visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    yearRefs.current.forEach((year, index) => {
      gsap.fromTo(
        year,
        { opacity: 0.3, x: -20 },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: descRefs.current[index],
            start: "top 60%",
            end: "top 30%",
            scrub: true
          }
        }
      );
    });

    descRefs.current.forEach((desc, index) => {
      gsap.fromTo(
        desc,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: desc,
            start: "top 70%",
            end: "top 40%",
            scrub: true
          }
        }
      );
    });
  }, [isVisible]);

  return (
    <section id="skills" className={styles.skillsContainer} ref={containerRef}>
      {/* Left Side - Years (Render only when visible) */}
      <div className={isVisible ? styles.years : styles.hiddenYears}>
        {experiences.map((exp, index) => (
          <div
            key={exp.year}
            className={styles.yearItem}
            ref={(el) => (yearRefs.current[index] = el)}
          >
            {exp.year}
          </div>
        ))}
      </div>

      {/* Right Side - Descriptions */}
      <div className={styles.descriptions}>
        {experiences.map((exp, index) => (
          <div
            key={exp.year}
            className={styles.description}
            ref={(el) => (descRefs.current[index] = el)}
          >
            <h2>{exp.title}</h2>
            <h3>{exp.role}</h3>
            <ul>
              {exp.description.map((point, i) => (
                <li key={i}>● {point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
