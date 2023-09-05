import React from "react";
import { Link } from "react-router-dom";
import coding from "./coding.png";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top">
        <div className="container-fluid">
          <a href="/" className="img-fluid">
            <img
              src={coding}
              alt="..."
              style={{ width: "45px", marginLeft: "15px" }}
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
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/projects">
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/testimonial">
                  Testimonial
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="d-flex">
          <i class="fa-brands fa-github fs-4 m-auto"></i>
          <i class="fa-brands fa-linkedin fs-4 m-auto"></i>
          <i class="fa-brands fa-youtube fs-4 m-auto"></i>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
