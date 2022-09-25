import React from "react";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/layout/Hero";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        <Hero />
      </div>
    </div>
  );
};

export default App;
