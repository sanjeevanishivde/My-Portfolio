import React from "react";
import "./Skills.css";

const Skills = () => {
  const technicalSkills = ["Java", "C", "HTML", "CSS", "Bootstrap", "JavaScript", "ReactJS"];
  const frameworks = ["Spring Boot"];
  const databases = ["SQL", "MySQL"];

  return (
    <section className="skills">
      <h1>Skills</h1>
      <p>Technical Skills:</p>
      <ul>
        {technicalSkills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      <p>Frameworks:</p>
      <ul>
        {frameworks.map((framework, index) => (
          <li key={index}>{framework}</li>
        ))}
      </ul>

      <p>Databases:</p>
      <ul>
        {databases.map((db, index) => (
          <li key={index}>{db}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
