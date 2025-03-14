import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

// Lazy loading components
const Home = React.lazy(() => import("./components/Home"));
const About = React.lazy(() => import("./components/About"));
const Projects = React.lazy(() => import("./components/Projects"));
const Skills = React.lazy(() => import("./components/Skills"));
const Resume = React.lazy(() => import("./components/Resume"));
const Contact = React.lazy(() => import("./components/Contact"));

import "./index.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
