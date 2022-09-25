import React from "react";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/layout/Hero";

const App = () => {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto max-w-[1140px]">
        <Hero />
      </main>
    </div>
  );
};

export default App;
