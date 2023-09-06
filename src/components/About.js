import React from "react";
import PageHeading from "./PageHeading";

const About = () => {
    return (
        <>
            <PageHeading heading="About Me" />
                  <img src="https://img.freepik.com/premium-vector/man-telling-lies_485157-195.jpg" className="img-fluid d-flex m-auto rounded  w-25" alt="..."/>
            <div className="container">
              <div className="row align-items-start">
                <div className="col mx-3 ">

                    <p
                        className=" p-3"
                        style={{
                            color: "blueviolet",
                            fontSize: "20px",
                            fontWeight: "bold",
                        }}
                    >
                        DESIGNER & DEVELOPER
                    </p>
                    <div className="p-3 m-auto">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut
                        laoreet. Dolore magna aliquam erat volutpat Dolore magna
                        aliquam erat volutpat. Lorem ipsum dolor sit amet,
                        consectetuer adipiscing elit, sed diam nonummy nibh
                        euismod tincidunt ut laoreet. Lorem ipsum dolor sit
                        amet, consectetuer adipiscing elit, sed diam nonummy
                        nibh euismod tincidunt ut laoreest.
                    </div>
                </div>
                <div className="col mx-3">
                    <p
                        className="text-center p-3"
                        style={{
                            color: "blueviolet",
                            fontSize: "20px",
                            fontWeight: "bold",
                        }}
                    >
                        Skills
                    </p>
                    <div
                        className="progress my-4 m-auto"
                        style={{ height: "25px" }}
                    >
                        <div
                            className="progress-bar"
                            role="progressbar"
                            aria-label="Danger example"
                            style={{ width: "90%", background: "blueviolet" }}
                            aria-valuenow="75"
                            aria-valuemin="0"
                            aria-valuemax="100"
                        >
                            REACT JS
                        </div>
                    </div>
                    <div
                        className="progress my-4  m-auto"
                        style={{ height: "25px" }}
                    >
                        <div
                            className="progress-bar"
                            role="progressbar"
                            aria-label="Danger example"
                            style={{ width: "90%", background: "blueviolet" }}
                            aria-valuenow="75"
                            aria-valuemin="0"
                            aria-valuemax="100"
                        >
                            JAVASCRIPT
                        </div>
                    </div>
                    <div
                        className="progress my-4  m-auto"
                        style={{ height: "25px" }}
                    >
                        <div
                            className="progress-bar"
                            role="progressbar"
                            aria-label="Danger example"
                            style={{ width: "80%", background: "blueviolet" }}
                            aria-valuenow="75"
                            aria-valuemin="0"
                            aria-valuemax="100"
                        >
                            HTML & CSS
                        </div>
                    </div>
                    <div
                        className="progress my-4  m-auto"
                        style={{ height: "25px" }}
                    >
                        <div
                            className="progress-bar"
                            role="progressbar"
                            aria-label="Danger example"
                            style={{ width: "80%", background: "blueviolet" }}
                            aria-valuenow="75"
                            aria-valuemin="0"
                            aria-valuemax="100"
                        >
                            Mobile Apps
                        </div>
                    </div>
                    <div
                        className="progress my-4  m-auto"
                        style={{ height: "25px" }}
                    >
                        <div
                            className="progress-bar"
                            role="progressbar"
                            aria-label="Danger example"
                            style={{ width: "75%", background: "blueviolet" }}
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
