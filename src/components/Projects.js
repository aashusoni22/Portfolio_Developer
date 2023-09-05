import React from "react";
import Project from "./Project";
import PageHeading from "./PageHeading";

const Projects = ({mode}) => {
  const projects = [
    {
      title: "Project 1",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. Lorem ipsum dolor sit amet consectetur adipisicing elit.Natus, accusamus! Inventore cum, nam, molestiae dolor accusantium aperiam saepe corrupti tempore, porro quo sed! This is a wider card with supporting text below as a natural lead-in",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nfGVufDB8fDB8fHww&w=1000&q=80",
      tags: ["HTML", "CSS", "JavaScript", "React Js", "JSX"],
      github: "https://github.com/",
    },
    {
      title: "Project 2",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. Lorem ipsum dolor sit amet consectetur adipisicing elit.Natus, accusamus! Inventore cum, nam, molestiae dolor accusantium aperiam saepe corrupti tempore, porro quo sed! This is a wider card with supporting text below as a natural lead-in",
      image:
        "https://www.itprotoday.com/sites/itprotoday.com/files/styles/article_featured_retina/public/JavaScript-code.jpg?itok=1Wia7hH0",
      tags: ["HTML", "Bootstrap", "JavaScript", "MERN", "API"],
      github: "https://github.com/",
    },
    {
      title: "Project 3",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. Lorem ipsum dolor sit amet consectetur adipisicing elit.Natus, accusamus! Inventore cum, nam, molestiae dolor accusantium aperiam saepe corrupti tempore, porro quo sed! This is a wider card with supporting text below as a natural lead-in",
      image:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--3zWuwYa3--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pdib9r9rk5j1m7oala1p.png",
      tags: ["JSX", "React Js", "Tailwind", "HTML", "Postman"],
      github: "https://github.com/",
    },
    {
      title: "Project 4",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. Lorem ipsum dolor sit amet consectetur adipisicing elit.Natus, accusamus! Inventore cum, nam, molestiae dolor accusantium aperiam saepe corrupti tempore, porro quo sed! This is a wider card with supporting text below as a natural lead-in",
      image:
        "https://blog.logrocket.com/wp-content/uploads/2023/06/3-ways-implement-typing-animation-React.png",
      tags: ["HTML", "CSS", "React Js", "Postman", "Node Js"],
      github: "https://github.com/",
    },
    {
      title: "Project 5",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. Lorem ipsum dolor sit amet consectetur adipisicing elit.Natus, accusamus! Inventore cum, nam, molestiae dolor accusantium aperiam saepe corrupti tempore, porro quo sed! This is a wider card with supporting text below as a natural lead-in",
      image:
        "https://www.codecademy.com/resources/blog/wp-content/uploads/2022/12/what-is-javascript-used-for.png",
      tags: ["HTML", "CSS", "React Js", "MongoDB", "Node Js"],
      github: "https://github.com/",
    },
    {
      title: "Project 6",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. Lorem ipsum dolor sit amet consectetur adipisicing elit.Natus, accusamus! Inventore cum, nam, molestiae dolor accusantium aperiam saepe corrupti tempore, porro quo sed! This is a wider card with supporting text below as a natural lead-in",
      image:
        "https://www.codecademy.com/resources/blog/wp-content/uploads/2022/12/what-is-javascript-used-for.png",
      tags: ["HTML", "CSS", "React Js", "MongoDB", "Node Js"],
      github: "https://github.com/",
    },
    {
      title: "Project 7",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. Lorem ipsum dolor sit amet consectetur adipisicing elit.Natus, accusamus! Inventore cum, nam, molestiae dolor accusantium aperiam saepe corrupti tempore, porro quo sed! This is a wider card with supporting text below as a natural lead-in",
      image:
        "https://www.codecademy.com/resources/blog/wp-content/uploads/2022/12/what-is-javascript-used-for.png",
      tags: ["HTML", "CSS", "React Js", "MongoDB", "Node Js"],
      github: "https://github.com/",
    },
    {
      title: "Project 8",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. Lorem ipsum dolor sit amet consectetur adipisicing elit.Natus, accusamus! Inventore cum, nam, molestiae dolor accusantium aperiam saepe corrupti tempore, porro quo sed! This is a wider card with supporting text below as a natural lead-in",
      image:
        "https://www.codecademy.com/resources/blog/wp-content/uploads/2022/12/what-is-javascript-used-for.png",
      tags: ["HTML", "CSS", "React Js", "MongoDB", "Node Js"],
      github: "https://github.com/",
    },
    {
      title: "Project 9",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. Lorem ipsum dolor sit amet consectetur adipisicing elit.Natus, accusamus! Inventore cum, nam, molestiae dolor accusantium aperiam saepe corrupti tempore, porro quo sed! This is a wider card with supporting text below as a natural lead-in",
      image:
        "https://www.codecademy.com/resources/blog/wp-content/uploads/2022/12/what-is-javascript-used-for.png",
      tags: ["HTML", "CSS", "React Js", "MongoDB", "Node Js"],
      github: "https://github.com/",
    },
  ];
  return (
    <>
      <PageHeading heading="Projects" />
      <Project mode={mode} projects={projects} />
    </>
  );
};

export default Projects;
