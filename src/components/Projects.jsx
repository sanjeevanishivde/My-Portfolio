import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "ShopeMore E-Commerce Website",
    date: "May 2024",
    description: [
      "Developed an e-commerce shopping website using HTML, CSS, Bootstrap, PHP, and MySQL.",
      "Allowed users to browse products, manage a shopping cart, and complete the checkout process with integrated payment solutions.",
      "Ensured responsive design for seamless user experience across devices using Bootstrap."
    ]
  },
  {
    title: "HexGL Racing Game",
    date: "Feb 2023",
    description: [
      "Created a 2D/3D racing game utilizing HTML, CSS, Bootstrap, WebGL, and Three.js for realistic rendering and animations.",
      "Implemented complex geometries, lighting, and shaders in Three.js to enhance visual effects and interactivity.",
      "Enhanced rendering pipelines to achieve smoother gameplay and enhanced graphics performance."
    ]
  },
  {
    title: "Women’s Online Shopping",
    date: "Mar 2022",
    description: [
      "Designed a user-friendly platform for product categorization and purchase, focusing on clothing, jewelry, and beauty products.",
      "Used PHP and MySQL for back-end functionalities to handle customer data and orders securely.",
      "Provided detailed product descriptions for an improved shopping experience."
    ]
  },
  {
    title: "Desktop Assistant",
    date: "Jun 2021",
    description: [
      "Built a Python-based desktop assistant integrated with APIs to perform voice command tasks such as playing music, sending emails, and more.",
      "Used speech recognition to process voice inputs and translate them into actionable tasks.",
      "Improved task execution accuracy by integrating advanced natural language processing techniques."
    ]
  }
];

const Projects = () => {
  return (
    <section className="projects">
      <h1>Projects</h1>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h2>{project.title}</h2>
            <p className="date">{project.date}</p>
            <ul>
              {project.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
