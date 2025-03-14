import React from "react";
import "./Home.css";
import { TypeAnimation } from "react-type-animation";
import DeveloperImage from "../assets/developer.png";

const Home = () => {
  return (
    <div className="home">
      <div className="hero-content">
        <h1>
          I'M <br />
          <span>SANJEEVANI SHIVDE</span>
        </h1>
        <CustomTypeAnimation />
      </div>
      <div className="hero-image">
        <img src={DeveloperImage} alt="Developer" className="developer-image" />
      </div>
    </div>
  );
};

const CustomTypeAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        "Website Developer",
        1000,
        "Java Developer",
        1000,
        "Full-Stack Developer",
        1000
      ]}
      speed={50}
      repeat={Infinity}
      className="typing-text"
    />
  );
};

export default Home;
