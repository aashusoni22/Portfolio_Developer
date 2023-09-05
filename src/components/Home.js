import React from "react";
import devHome from "./dev-home.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Home = () => {
  const [text] = useTypewriter({
    words: ["Web Developer", "Freelancer", "UX/UI Desginer"],
    loop: {},
    typeSpeed: 80,
    deleteSpeed: 50,
  });
  return (
    <>
      <div className="d-flex">
        <div className="image-container">
          <img src={devHome} alt="..." className="devHomeImg" />
        </div>
        <div className="intro">
          <p>Hi, I am Aashutosh</p>
          <p className="my-4 intro1">
            I am a{" "}
            <span style={{ fontWeight: "bold", color: " rgb(135, 25, 238)" }}>
              {text}
            </span>
            <Cursor />
          </p>
          <i className="fa-brands fa-github"></i>
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-youtube"></i>
          <div className="hireMe">
            <button className="btn hireMeBtn">Hire Me</button>
            <button className="btn cvBtn mx-3">Download CV</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
