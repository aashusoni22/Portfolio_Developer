import React from "react";
import devHome from "./dev-home.png";
import resume from "./resume.pdf";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Home = ({ mode }) => {
  const [text] = useTypewriter({
    words: ["Web Developer", "Freelancer", "UX/UI Desginer"],
    loop: {},
    typeSpeed: 80,
    deleteSpeed: 50,
  });

  const textColor = mode === "dark" ? "white" : "black";

  return (
    <>
      <div className="d-flex">
        <div className="image-container">
          <img src={devHome} alt="..." className="devHomeImg" />
        </div>
        <div className="intro">
          <p>Hi, I am Aashutosh</p>
          <p className="my-4 intro1">
            I am a <span style={{ color: "rgb(98, 70, 223)" }}>{text}</span>
            <Cursor />
          </p>
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-github" style={{ color: textColor }}></i>
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
            <i
              className="fa-brands fa-linkedin"
              style={{ color: textColor }}
            ></i>
          </a>
          <a href="https://youtube.com/" target="_blank" rel="noreferrer">
            <i
              className="fa-brands fa-youtube"
              style={{ color: textColor }}
            ></i>
          </a>
          <div className="hireMe">
            <button className="btn hireMeBtn" style={{ color: textColor }}>
              Hire Me
            </button>
            <a
              href={resume}
              download="resume.pdf"
              style={{ textDecoration: "none", color: textColor }}
            >
              <button className="btn cvBtn mx-3">Download CV</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
