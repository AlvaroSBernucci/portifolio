import { useState } from "react";
import { Navbar, Home, Education, Technologies, Projects, Contact, Footer } from "./components";
import "./App.css";

function App() {
  return (
    <div className="bg-black text-white font-display">
      <Navbar />
      <Home />
      <Education /> <Technologies /> <Projects /> <Contact />
      <Footer />
    </div>
  );
}

export default App;
