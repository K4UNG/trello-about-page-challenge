import React from "react";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/layout/Hero";

const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <div className="hero-gradient">
          <div className="container mx-auto max-w-[1140px]">
            <Hero />
          </div>
        </div>
        <div className="container mx-auto max-w-[1140px]"></div>
      </main>
    </div>
  );
};

export default App;
