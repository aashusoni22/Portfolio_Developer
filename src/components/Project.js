import React, { useState } from "react";

const Project = ({ projects }) => {
  const [visibleProjects, setvisibleProjects] = useState(4);

  const showMoreProjects = () => {
    setvisibleProjects(visibleProjects + 4);
  };

  return (
    <>
      <div className="container">
        {projects.slice(0, visibleProjects).map((project, index) => (
          <a href={project.github} target="_blank" rel="noreferrer">
            <div
              className="card mb-4"
              key={index}
              style={{ maxWidth: "700px" }}
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
                  <div className="card-body">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text">{project.description}</p>
                    <div className="mb-3">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          className="badge mx-1"
                          style={{ backgroundColor: "blueviolet" }}
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
          >
            Show More
          </button>
        )}
      </div>
    </>
  );
};

export default Project;
