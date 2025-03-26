import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About"
import Project from "./components/Project";
import Experiences from "./components/Experiences"
import Footer from "./components/Footer"
import "./styles/global.css"; 

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Project />
      <Experiences />
      <Footer />
    </div>
  );
}

export default App;
