import React from "react";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import Navbar from "./components/Navbar";
import Logo from "./sections/Logo";
import FeatureCards from "./sections/FeatureCards";
import Experience from "./sections/Experience";
import TechStack from "./sections/TechStack";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <ShowcaseSection />
      <Logo />
      <FeatureCards />
      <Experience />
      <TechStack />
      {/* <Testimonials /> */}
      <Contact />
    </main>
  );
};

export default App;
