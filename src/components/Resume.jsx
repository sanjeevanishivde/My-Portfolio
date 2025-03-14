import React from "react";
import "./Resume.css";
const Resume = () => {
  return (
    <section className="resume">
      <h1>Resume</h1>
      <a href="src/components/resume.pdf" download>Download My Resume</a>
    </section>
  );
};

export default Resume;
