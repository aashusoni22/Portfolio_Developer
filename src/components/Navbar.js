import React, { useState } from "react";
import { Link } from "react-router-dom";
import coding from "./coding.png";

const Navbar = (props) => {

  const textcolor = props.mode === "light" ? "black": "white";

  const [activeLink, setActiveLink] = useState(""); // Initialize active link state

  // Function to handle link click and set the active link
  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  return (
    <>
      <nav className= {`navbar navbar-expand-lg p-3 sticky-top`}>
        <div className="container-fluid">
          <a href="/" className="img-fluid">
            <img
              src={coding}
              alt="..."
              style={{ width: "40px", marginLeft: "80px" }}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className={activeLink === "home" ? "active-link" : "nav-lnk"}
            onClick={() => handleLinkClick("home")} style={{textDecoration:"none"}} >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link  to="/about" className={activeLink === "about" ? "active-link" : "nav-lnk"}
            onClick={() => handleLinkClick("about")} style={{textDecoration:"none"}}>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/projects" className={activeLink === "projects" ? "active-link" : "nav-lnk"}
            onClick={() => handleLinkClick("projects")} style={{textDecoration:"none"}}>
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/testimonial" className={activeLink === "testimonial" ? "active-link" : "nav-lnk"}
            onClick={() => handleLinkClick("testimonial")} style={{textDecoration:"none"}}>
                  Testimonial
                </Link>
              </li>
              <li className="nav-item">
                <Link  to="/contact" className={activeLink === "contact" ? "active-link" : "nav-lnk"}
            onClick={() => handleLinkClick("contact")} style={{textDecoration:"none"}}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="d-flex navSocial">
       <i onClick={props.toggleMode}
            className="fa-solid fa-moon fs-4 m-auto"
            style={{ color: textcolor }}
          ></i>
          <a href="https://github.com/" target="_blank" rel="noreferrer"><i
            className="fa-brands fa-github fs-4 m-auto"
            style={{ color: "white" }}
          ></i></a>
           <a href="https://linkedin.com/" target="_blank" rel="noreferrer"><i
            className="fa-brands fa-linkedin fs-4 m-auto"
            style={{ color: "white"}}
          ></i></a>
           <a href="https://youtube.com/" target="_blank" rel="noreferrer"><i
            className="fa-brands fa-youtube fs-4 m-auto"
            style={{ color: "white" }}
          ></i></a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
