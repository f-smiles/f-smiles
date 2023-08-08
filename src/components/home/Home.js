import React from "react";
import Hero from "./Hero";
import LogoSlider from "./logoslider";
import Features from "./Features";
import Locations from "./Locations";

const Home = () => {
  
  return (
    <>
      <main className="w-full overflow-hidden bg-white">
        <Hero />
        <Features />
        <LogoSlider />
        <Locations />
      </main>
    </>
  );
};

export default Home;