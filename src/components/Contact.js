import React from "react";
import PageHeading from "./PageHeading";
import contactHi from "./contactHi.png"

const Contact = (props) => {
  return (
    <div>
      <PageHeading heading="Contact Me" />
      <div className="container-fluid w-50">
        <form className="row g-3">
          <div className="col-md-6">
            <label for="inputFirstName" className="form-label">
              First Name
            </label>
            <input type="text" className="form-control" id="inputFirstName" />
          </div>
          <div className="col-md-6">
            <label for="inputLastName" className="form-label">
              Last Name
            </label>
            <input type="text" className="form-control" id="inputLastName" />
          </div>
          <div className="col-6">
            <label for="inputEmail" className="form-label">
              Email Address
            </label>
            <input type="email" className="form-control" id="inputEmail" />
          </div>
          <div className="col-md-6">
            <label for="inputMobile" className="form-label">
              Mobile
            </label>
            <input
              type="text"
              className="form-control"
              id="inputMobile"
              placeholder="+1"
            />
          </div>
          <div className="form-group">
            <label for="exampleFormControlTextarea1">Message</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="4"
            ></textarea>
          </div>
          <div className="col-12">
            <button
              type="submit"
              className="btn my-3"
              style={{ background: "blueviolet", color: "white" }}
            >
              Submit
            </button>
          </div>
        </form>
        <img className="image-fluid m-auto d-flex" src={contactHi} alt=".." style={{width: "31%"}}/>
      </div>
    </div>
  );
};

export default Contact;
