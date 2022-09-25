import React from "react";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/layout/Hero";
import About from "./components/layout/About";
import Info from "./components/layout/Info";

const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <div className="hero-gradient">
          <div className="container mx-auto xl:max-w-[1140px]">
            <Hero />
          </div>
        </div>
        <div className="container mx-auto xl:max-w-[1140px]">
          <About />
          <Info />
        </div>
      </main>
    </div>
  );
};

export default App;
