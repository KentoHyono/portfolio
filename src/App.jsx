// App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Games from "./components/Games";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ParticlesBackground from "./components/ParticlesBackground";

export default function App() {
  return (
    <div className="text-gray-100 min-h-screen relative  bg-gray-950">
      <ParticlesBackground />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Games />
      <Contact />
      <Footer />
    </div>
  );
}
