import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About"; // Import About page
import "./index.css"; // Global styles

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About /> {/* Add About page below Home */}
    </div>
  );
}

export default App;
