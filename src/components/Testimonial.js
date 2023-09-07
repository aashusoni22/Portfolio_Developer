import React, { useState } from "react";
import PageHeading from "./PageHeading";

const Testimonial = (props) => {
  const textcolor = props.mode === "light" ? "black" : "white";

  // Define your testimonial data
  const testimonials = [
    {
      name: "John Doe 1",
      content:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      image: "https://ntrepidcorp.com/wp-content/uploads/2016/06/team-1.jpg",
    },
    {
      name: "John Doe 2",
      content:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      image:
        "https://media.licdn.com/dms/image/C5103AQFl656k2-DwOg/profile-displayphoto-shrink_800_800/0/1517034956958?e=2147483647&v=beta&t=6H_aZri3qcbtlgwTyTKBceuyTEPYW43xGViq5UL4J-w",
    },
    {
      name: "John Doe 3",
      content:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1fvYGwKVq3JGj9L7LvXoF4WLresbhH4psaxLEBpqMF0bXY5EEr7fmbYwvyjJOoE9Vv2k&usqp=CAU",
    },
    {
      name: "John Doe 4",
      content:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqsR0xBa1b1G_re0sznGAQ0Ua03Vxbh77cJF7NK8HNpl42OjUiJQZWj98k7SHTJ3EjvH4&usqp=CAU",
    },
    {
      name: "John Doe 5",
      content:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      image:
        "https://media.licdn.com/dms/image/C4D03AQFyCeq_Rbn6iA/profile-displayphoto-shrink_800_800/0/1574271037601?e=2147483647&v=beta&t=MNjV06pJT9NeVciDPtiL2SlfGR1NJB0cC8dniKy4JZc",
    },
    {
      name: "John Doe 6",
      content:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      image: "https://captiontools.com/wp-content/uploads/2017/03/testy3-1.png",
    },
    {
      name: "John Doe 7",
      content:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDK1OZ8aYGLJjsLJFzYSy0bMb1nodDa3rSq6c5IulPQBxg7ToEH3nnSa3-92_xCMh-MJI&usqp=CAU",
    },
    // Add more testimonials as needed
  ];

  // Initialize state to keep track of the index of the first card to display
  const [startIndex, setStartIndex] = useState(0);

  // Function to handle clicking the left arrow
  const handleLeftArrowClick = () => {
    // Calculate the new startIndex by subtracting 3
    const newStartIndex = startIndex - 3;
    // Ensure the newStartIndex is within valid bounds (>= 0)
    if (newStartIndex >= 0) {
      setStartIndex(newStartIndex);
    }
  };

  // Function to handle clicking the right arrow
  const handleRightArrowClick = () => {
    // Calculate the new startIndex by adding 3
    const newStartIndex = startIndex + 3;
    // Ensure the newStartIndex is within valid bounds (< testimonials.length)
    if (newStartIndex < testimonials.length) {
      setStartIndex(newStartIndex);
    }
  };

  // Function to render a testimonial card
  const renderTestimonialCard = (index) => {
    const testimonial = testimonials[index];
    return (
      <div
        className="card"
        style={{ width: "18rem", border: "none" }}
        key={index}
      >
        <div
          className="image-fluid d-flex align-items-center"
          style={{ height: "30vh" }}
        >
          <img
            src={testimonial.image}
            className="card-img-top h-100"
            style={{ borderRadius: "30px", padding: "10px" }}
            alt="..."
          />
        </div>
        <div className="card-body">
          <p
            className="text-center"
            style={{ fontSize: "20px", fontWeight: "bold", color: textcolor }}
          >
            {testimonial.name}
          </p>
          <p className="card-text" style={{ color: textcolor }}>
            {testimonial.content}
          </p>
        </div>
        <div className="container">
          <i
            className="fa-solid fa-star p-0 m-auto"
            style={{ color: "gold", fontSize: "21px" }}
          ></i>
          <i
            className="fa-solid fa-star p-0"
            style={{ color: "gold", fontSize: "21px" }}
          ></i>
          <i
            className="fa-solid fa-star p-0"
            style={{ color: "gold", fontSize: "21px" }}
          ></i>
          <i
            className="fa-solid fa-star p-0"
            style={{ color: "gold", fontSize: "21px" }}
          ></i>
          <i
            className="fa-solid fa-star p-0"
            style={{ color: "gold", fontSize: "21px" }}
          ></i>
        </div>
      </div>
    );
  };

  // Calculate the endIndex based on the startIndex and the number of cards to show (3)
  const endIndex = startIndex + 3;

  return (
    <>
      <PageHeading heading="Testimonial" />
      <div className="container">
        <div
          className="row"
          style={{ "--bs-gutter-x": "-8.5rem", scrollBehavior: "smooth" }}
        >
          {testimonials.slice(startIndex, endIndex).map((_, index) => (
            <div className="col-md-4" key={startIndex + index}>
              {renderTestimonialCard(startIndex + index)}
            </div>
          ))}
        </div>
      </div>
      <div className="text-center my-3">
        <i
          className="fa-solid fa-chevron-left mx-4"
          style={{ fontSize: "30px", cursor: "pointer", color: "blueviolet" }}
          onClick={handleLeftArrowClick}
        ></i>
        <i
          className="fa-solid fa-chevron-right mx-4"
          style={{ fontSize: "30px", cursor: "pointer", color: "blueviolet" }}
          onClick={handleRightArrowClick}
        ></i>
      </div>
    </>
  );
};

export default Testimonial;
