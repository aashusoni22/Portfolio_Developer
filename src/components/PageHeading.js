import React from "react";

const PageHeading = (props) => {
  return (
    <div>
      <h2
        className="text-center my-5"
        style={{ color: "rgb(118, 18, 211)", fontWeight: "bold" }}
      >
        {props.heading}
      </h2>
    </div>
  );
};

export default PageHeading;
