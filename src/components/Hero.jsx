// Hero.jsx
import { motion } from "framer-motion";
import { Link } from "react-scroll";

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Animated background circles */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1], opacity: [1, 0.8, 0.4, 0.8] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute rounded-full border-4 border-blue-500 h-[400px] w-[400px] opacity-30"
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.2, 1.8, 1.2], opacity: [1, 0.6, 0.2, 0.6] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute rounded-full border-4 border-purple-500 h-[600px] w-[600px] opacity-20"
      />

      {/* Hero text content */}
      <motion.h1
        className="text-6xl md:text-7xl font-montserrat mb-6 z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Hi, I’m <span className="text-blue-400 font-bold">Kento Hyono</span> 👋
      </motion.h1>

      <motion.p
        className="text-lg md:text-2xl text-gray-300 max-w-2xl z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      >
        Game Developer 🎮 | Software Developer 💻
      </motion.p>

      <motion.p
        className="text-lg md:text-2xl bg-transparent border border-blue-500 text-blue-700 font-semibold mt-8 px-8 py-3 bg-blue-500 -xl shadow-lg hover:bg-blue-600 hover:text-white hover:border-transparent transition z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        whileHover={{ scale: 1.05 }}
      >
        <Link
          to="projects"
          smooth={true}
          duration={600}
          className="cursor-pointer block w-full h-full"
        >
          View My Work
        </Link>
      </motion.p>
    </section>
  );
}
