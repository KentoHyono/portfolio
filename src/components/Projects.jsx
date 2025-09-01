import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "Workout Tracker App",
    description: "Build with Andoid Studio and Java. A complete workout tracker app that integrates an extenal API, database and statistics graphs.",
    image: "workoutapp.png",
  },
  {
    title: "Nom Nom Express",
    description: "School project. A full-stack restraurant ordering web app build with LAMP stack integrating secure payment gateway.",
    image: "ecommerce.png",
  },
  {
    title: "Vite & React Portfolio",
    description: "This portfolio website built with Vite, React, TailwindCSS, and Framer Motion.",
    image: "portfolio.png",
  },
];

export default function Projects() {
  const [current, setCurrent] = useState(0);

  const nextProject = () => setCurrent((prev) => (prev + 1) % projects.length);
  const prevProject = () => setCurrent((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <section
      id="projects"
      className="relative min-h-screen text-white flex my-20 flex-col items-center justify-center overflow-hidden"
    >
      <h2 className="text-6xl font-bold mb-16">Projects</h2>

      <div className="relative w-full flex items-center justify-center">
        {/* Left button */}
        <button
          onClick={prevProject}
          className="absolute left-4 bg-white/10 hover:bg-white/20 text-white px-5 py-3 rounded-full z-50"
        >
          ◀
        </button>

        {/* Projects */}
        <div className="relative flex items-center justify-center w-full max-w-6xl h-[800px]">
          <AnimatePresence>
            {projects.map((project, index) => {
              // relative position (-1 = left, 0 = center, 1 = right)
              const relativePosition = (index - current + projects.length) % projects.length;

              if (relativePosition !== 0 && relativePosition !== 1 && relativePosition !== projects.length - 1) {
                return null; // hide anything not left, center, or right
              }

              let position = index - current;

              // Wrap around for looping
              if (position < 0) position += projects.length;
              if (position >= projects.length) position -= projects.length;

              const isCenter = position === 0;

              return (
                <motion.div
                  key={index}
                  className="absolute flex-shrink-0 cursor-pointer"
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{
                    opacity: isCenter ? 1 : 0.3,
                    scale: isCenter ? 1.2 : 0.6, // bigger center, smaller sides
                    x: isCenter ? 0 : position === 1 ? 700 : -700, // push further off-screen
                    zIndex: isCenter ? 20 : 0,
                  }}F
                  exit={{ opacity: 0 }}
                  transition={{ type: "spring", stiffness: 120, damping: 20 }}
                  style={{ width: isCenter ? "80%" : "30%" }} // center card much bigger
                  onClick={() => setCurrent(index)}
                >
                  <div className="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-700 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/30 transition">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full object-cover"
                      style={{height: "30rem"}}
                    />
                    <div className="p-8">
                      <h3 className="text-3xl font-semibold">{project.title}</h3>
                      <p className="mt-3 text-gray-400">{project.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Right button */}
        <button
          onClick={nextProject}
          className="absolute right-6 bg-white/10 hover:bg-white/20 text-white px-5 py-3 rounded-full z-50"
        >
          ▶
        </button>
      </div>
    </section>
  );
}
