import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Experiences from "./components/Experiences"
import "./styles/global.css"; // Global styles

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Project />
      <Experiences />
      <Contact />
    </div>
  );
}

export default App;
