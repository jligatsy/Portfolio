import React, { useState } from "react";
import "../styles/experiences.css";
import { FaChevronDown, FaChevronUp, FaMapMarkerAlt } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import rubberCalLogo from "../assets/rclogo.jpg";
import codeNinjasLogo from "../assets/codeninjaslogo.png";
import tanakayaLogo from "../assets/tanakayalogo.jpg";
import kreasiLogo from "../assets/kmu.png";
import uciLogo from "../assets/UCIlogo.png";
import ivcLogo from "../assets/IVClogo.png";
import pvalogo from "../assets/pvalogo.png";
import yebologo from "../assets/yebologo.jpg";


const education = [
  {
    year: "2023 - 2025",
    title: "University of California, Irvine",
    degree: "B.Sc. in Computer Science",
    logo: uciLogo,
    description: [
      "Specialization in Networked Systems",
      "Informatics, Software Design, Information Retrieval, Operating Systems",
      "Worked on projects with industry professionals."
    ],
    side: "left"
  },
  {
    year: "2021 - 2023",
    title: "Irvine Valley College",
    degree: "A.A. in Computer Science",
    logo: ivcLogo,
    description: [
      "Built a strong foundation in programming and algorithms.",
      "Excelled in mathematics and computational problem-solving.",
      "Transferred to UCI."
    ],
    side: "right"
  }
];

const experiences = [
  {
    id: 1,
    title: "IT Specialist @ Yebo Group",
    company: "Yebo Group",
    location: "Tustin, California",
    employment: "Full-Time",
    website: "https://www.customboxesandpackaging.com",
    year: "2025 - Present",
    logo: yebologo,
    description: [
      "Act as the primary IT point of contact, managing Tier I/II service requests, troubleshooting hardware/software issues, ensuring system reliability, and maintaining network security by enforcing best IT practices and facilitating swift issue resolution.",
      "Deploying and configuring company devices (laptops, desktops, mobile) using Microsoft Intune, Autopilot, and Entra ID while administering Microsoft 365, Active Directory, and enterprise SaaS platforms to ensure optimal performance and usability.",
      "Ensuring network stability and security across LAN/WAN, VPN, and V oIP systems, troubleshoot connectivity issues with production machines, routers, and internet access, and utilize VMs for secure data storage, fostering seamless operations."
    ],
    tags: ["Tech Support", "System and Software Administrator", "Network Administration" , "IT Knowledgebase", "M365 Adminstration", "Filemaker"]
  },
  {
    id: 2,
    title: "Software Engineering Intern @ Partner Valuation Advisors",
    company: "Partner Valuation Advisors",
    location: "Irvine, California",
    employment: "Capstone Project (Internship)",
    website: "https://www.partnerval.com",
    year: "2025",
    logo: rubberCalLogo,
    description: [
      "Collaborated with a full-stack development team to build an internal PDF parsing web application, automating data extraction to reduce manual intervention and improve document processing speed, significantly enhancing operational efficiency.",
      "Engineered the front-end framework using Figma, React (JSX) and JavaScript, then integrated it with backend services powered by Tesseract OCR, ChromaDB Vector Database, and APIs to streamline data-processing, enhance usability and scalability.",
      "Drove software quality and team alignment by applying Agile and TDD principles, managing code with GitHub, tracking progress in Jira, while collaborating closely with the backend team and stakeholders through weekly sprint progress reports."
    ],
    tags: ["Project Management", "Python", "Figma", "React.js", "REST APIs", "ChromaDB", "Github", "Version Control", "Interdisciplinary Collab"]
  },
  {
    id: 3,
    title: "Data Operations Analyst @ Rubber-Cal",
    company: "Rubber-Cal",
    location: "Fountain Valley, California",
    employment: "Part-Time",
    website: "https://www.rubbercal.com",
    year: "2024 - Present",
    logo: rubberCalLogo,
    description: [
      "Managed and analyzed ad performance for 750+ products across multiple storefronts and five company-owned websites, optimizing campaigns to drive an 11% increase in e-commerce sales.",
      "Developed campaign management models by leveraging data from Google Analytics, Google Search Console, web silos, sales metrics, and performance testing to optimize marketing strategies.",
      "Optimized inventory tracking for 8200+ SKUs in NetSuite and Excel, achieving high-level accuracy in data management.",
      "Took part in the NPD process by uploading products to storefronts and websites, crafting product descriptions, developing targeted ads campaigns to enhance visibility and drive sales."
    ],
    tags: ["Ads Optimization", "Storefront Management", "Product Listing", "WooCommerce", "Google Analytics", "Google Search Console", "Excel", "NetSuite", "SCM-CRM-ERP"]
  },
  {
    id: 4,
    title: "Coding and STEM Instructor @ Code Ninjas",
    company: "Code Ninjas",
    location: "Irvine, California",
    employment: "Part-Time",
    website: "https://www.codeninjas.com/ca-irvine",
    year: "2023 - 2024",
    logo: codeNinjasLogo,
    description: [
      "Mentored and supervised 20+ children (ages 5 to 14) daily in coding fundamentals through engaging and age-appropriate lessons, then created detailed progress reports to track individual development to parents.",
      "Conducted complimentary course trials for prospective young learners, sparking heightened interest and contributing to a 14% growth in student enrollment.",
      "Collaborated with administrators and fellow mentors to deliver educational instruction to over 200 students, fostering a cohesive and enriching learning environment."
    ],
    tags: ["Microsoft MakeCode", "Unity (C#)", "Java", "Python", "Curriculum-Development", "Mentorship", "STEM Education", "Game-Based Learning"]
  },
  {
    id: 5,
    title: "Food Service Associate @ Tanakaya",
    company: "Tanakaya Soba",
    location: "Tustin, California",
    employment: "Part-Time",
    website: "https://www.tanakaya-soba.com",
    year: "2022 - 2023",
    logo: tanakayaLogo,
    description: [
      "Providing service to fulfill the needs of about 100+ parties per day by helping them to place, receive, and pay for their orders.",
      "Maintaining high standards of customer service, resulting in the increase of around 20% in positive feedback and 13% in sales.",
      "Operating the restaurant's POS system daily to input and manage orders, maintaining a high level of accuracy and efficiency.",
      "Coordinating with the waitstaff, kitchen and managers to ensure each guest was assigned and satisfied with their dining experience.",
    ],
    tags: ["Customer Service", "POS System Management", "Workflow Coordination", "Multi-tasking"]
  },
  {
    id: 6,
    title: "Public Relations Intern @ PT. Kreasi Media Utama",
    company: "PT. Kreasi Media Utama",
    location: "Jakarta, Indonesia",
    employment: "Summer Intern",
    website: "",
    year: "2021",
    logo: kreasiLogo,
    description: [
      "Networked with 40+ customers and external parties through digital platforms, increasing brand recognition and preserving well established connections.",
      "Assisted in handling daily operations of the PR Department, managing the publishing editorial of the brand.",
      "Executed strategic PR campaigns which resulted in a 17% increase of brand engagement.",
      "Developed brand messaging by collaborating with members from the Marketing Department."
    ],
    tags: ["Canva", "Excel", "Whatsapp", "Brand Management", "Event Coordination", "Cross-Team Collaboration"]
  }
];

function Experiences() {
  const [activeJob, setActiveJob] = useState(1); // by defaultt, open the first job

  const toggleJob = (id) => {
    setActiveJob(activeJob === id ? null : id);
  };

  return (
    <section id="experiences" className="skills-container">
      {/* Education Section */}
      <h2 className="section-title">Education</h2>
      <div className="education-timeline">
        {education.map((edu, index) => (
          <div key={index} className={`education-item ${edu.side}`}>
            <div className="education-marker">
              <img src={edu.logo} alt={`${edu.title} logo`} className="education-logo" />
            </div>
            <div className="education-content">
              <h2>{edu.title}</h2>
              <h3>{edu.degree}</h3>
              <p className="timeline-year">{edu.year}</p>
              <ul>
                {edu.description.map((desc, i) => (
                  <li key={i}>● {desc}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Work Experience Section */}
      <h2 className="section-title">Work Experience</h2>
      <div className="work-experience-container">
        {experiences.map((exp) => (
          <div key={exp.id} className="job-item">
            <button
              className={`job-header ${activeJob === exp.id ? "active" : ""}`}
              onClick={() => toggleJob(exp.id)}
            >
              <span className="job-title">{exp.title}</span>
              <span className="job-year">
                {exp.year} {activeJob === exp.id ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </button>

            {activeJob === exp.id && (
              <div className="job-details">
                <div className="job-description">
                  <p>
                    <FaMapMarkerAlt /> {exp.location} &emsp;
                    {exp.employment} &emsp;
                    {exp.website && (
                      <a href={exp.website} target="_blank" rel="noopener noreferrer">
                        <FaArrowUpRightFromSquare /> {exp.website}
                      </a>
                    )}
                  </p>
                  <ul>
                    {exp.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                  <div className="job-tags">
                    {exp.tags.map((tag, i) => (
                      <span key={i} className="job-tag">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="job-logo-container">
                  <img src={exp.logo} alt={`${exp.company} logo`} className="job-logo" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experiences;