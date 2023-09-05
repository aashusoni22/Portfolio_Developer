import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Testimonial from "./components/Testimonial";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white'
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black'
    }
  }

  return (
    <Router>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Routes>
        <Route exact path="/" element={<Home mode={mode} toggleMode={toggleMode} />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/projects" element={<Projects mode={mode} toggleMode={toggleMode}/>}></Route>
        <Route exact path="/testimonial" element={<Testimonial />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
