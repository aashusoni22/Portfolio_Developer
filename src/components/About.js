import React from "react";
import PageHeading from "./PageHeading";
import contactHi from "./contactHi.png";

const About = () => {
  return (
    <>
      <PageHeading heading="About Me" />
      <img
        src={contactHi}
        className="img-fluid d-flex m-auto rounded my-5"
        style={{ width: "220px" }}
        alt="..."
      />
      <div className="container">
        <div className="row align-items-start">
          <div className="col mx-3 mb-4">
            <p
              className=" p-3"
              style={{
                color: "rgb(98, 70, 223)",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              DESIGNER & DEVELOPER
            </p>
            <div className="p-3 m-auto" style={{ textAlign: "justify" }}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam
              erat volutpat Dolore magna aliquam erat volutpat. Lorem ipsum
              dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
              nibh euismod tincidunt ut laoreet. Lorem ipsum dolor sit amet,
              consectetuer adipiscing elit, sed diam nonummy nibh euismod
              tincidunt ut laoreest. Lorem ipsum dolor sit amet, consectetuer
              adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
              laoreest. Lorem ipsum dolor sit amet, consectetuer adipiscing
              elit, sed diam nonummy nibh euismodft.
            </div>
          </div>
          <div className="col mx-3 mb-4">
            <p
              className="text-center p-3"
              style={{
                color: "rgb(98, 70, 223)",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              SKILLS
            </p>
            <div
              className="progress my-4 m-auto"
              style={{ height: "25px", fontSize: "15px" }}
            >
              <div
                className="progress-bar"
                role="progressbar"
                aria-label="Danger example"
                style={{ width: "90%", background: "rgb(98, 70, 223)" }}
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                REACT JS
              </div>
            </div>
            <div
              className="progress my-4  m-auto"
              style={{ height: "25px", fontSize: "15px" }}
            >
              <div
                className="progress-bar"
                role="progressbar"
                aria-label="Danger example"
                style={{ width: "90%", background: "rgb(98, 70, 223)" }}
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                JAVASCRIPT
              </div>
            </div>
            <div
              className="progress my-4  m-auto"
              style={{ height: "25px", fontSize: "15px" }}
            >
              <div
                className="progress-bar"
                role="progressbar"
                aria-label="Danger example"
                style={{ width: "80%", background: "rgb(98, 70, 223)" }}
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                HTML & CSS
              </div>
            </div>
            <div
              className="progress my-4  m-auto"
              style={{ height: "25px", fontSize: "15px" }}
            >
              <div
                className="progress-bar"
                role="progressbar"
                aria-label="Danger example"
                style={{ width: "80%", background: "rgb(98, 70, 223)" }}
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                Mobile Apps
              </div>
            </div>
            <div
              className="progress my-4  m-auto"
              style={{ height: "25px", fontSize: "15px" }}
            >
              <div
                className="progress-bar"
                role="progressbar"
                aria-label="Danger example"
                style={{ width: "75%", background: "rgb(98, 70, 223)" }}
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                BOOTSTRAP
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
