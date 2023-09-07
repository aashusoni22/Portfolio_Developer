import React, { useState } from "react";

const Project = ({ projects, mode }) => {
  const [visibleProjects, setvisibleProjects] = useState(2);

  const showMoreProjects = () => {
    setvisibleProjects(visibleProjects + 2);
  };

  const renderDescriptionPoints = (description) => {
    // Split the description into points based on newline characters
    const points = description.split(".");

    return (
      <ul>
        {points.map((point, pointIndex) => (
          <li className="my-2" key={pointIndex}>
            {point}
          </li>
        ))}
      </ul>
    );
  };

  // Define text color based on the mode
  const textColor = mode === "dark" ? "white" : "black";

  return (
    <>
      <div className="container">
        {projects.slice(0, visibleProjects).map((project, index) => (
          <a href={project.github} target="_blank" rel="noreferrer">
            <div
              className="card mb-4"
              key={index}
              style={{ maxWidth: "1000px", color: textColor }}
            >
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={project.image}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body p-4" style={{ height: "400px" }}>
                    <h5 className="card-title my-4">{project.title}</h5>
                    {renderDescriptionPoints(project.description)}
                    <div className="mb-3">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          className="badge mx-1"
                          style={{ backgroundColor: "rgb(98, 70, 223)" }}
                          key={tagIndex}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        ))}
        {visibleProjects >= projects.length ? null : (
          <button
            onClick={showMoreProjects}
            className="btn hireMeBtn d-flex my-4 m-auto"
            style={{ color: textColor }}
          >
            Show More
          </button>
        )}
      </div>
    </>
  );
};

export default Project;
