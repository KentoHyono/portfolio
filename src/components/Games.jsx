import { motion } from "framer-motion";

const games = [
  {
    title: "Benkei - Samurai Duel Game",
    desc: "A 3D samurai duel game with a minimal combat system for two players, focusing on skill based interaction. Built with Godot. ",
    img: "benkei.png",
    tech: ["Godot", "GDScript", "Blender", "3D Modeling","Animation"],
    github: "https://github.com/DysonPolvi/swordsies",
  },
  {
    title: "Super Runner - Lowpoly Escape Game",
    desc: "A lowpoly, silly, and fun Unity game where a player must steal cats from a large building with bunch of people chaseing after within a time limit.",
    img: "superrunner.png",
    tech: ["Unity", "C++"],
    github: "https://github.com/KentoHyono/SuperRunner",
  },
  {
    title: "DVD Corner Bouncer",
    desc: "A retro-style Python application that mimics the classic DVD logo bouncing around the screen, where a player aims to hit the logo to the corner using a smily face.",
    img: "dvd.png",
    tech: ["Python", "Pygame"],
    github: "https://github.com/KentoHyono/DVDCorner",
  },
];

export default function Games() {
  return (
    <section id="games" className="px-6 py-20 bg-gray-950 text-center">
      <h2 className="text-6xl font-bold mb-16">Games</h2>
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {games.map((p, i) => (
          <motion.div
            key={i}
            className="bg-gray-900 rounded-2xl shadow-xl overflow-hidden group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
          >
            {/* Game Image */}
            <div className="overflow-hidden">
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                style={{height: "25rem", width: "100%"}}
              />
            </div>

            {/* Games Content */}
            <div className="p-6">
              <h3 className="text-3xl font-semibold mb-2">{p.title}</h3>
              <p className="px-5 py-2 text-xl text-left text-gray-400 mb-4">{p.desc}</p>

              {/* Tech stack */}
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {p.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full text-lg"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex justify-end gap-2 px-5">
                <a
                  href={p.github}
                  target="_blank"
                  className="text-blue-400 hover:underline"
                >
                  GitHub 
                </a>
                <a 
                  href={p.github}
                  target="_blank"
                  className="text-blue-400 hover:underline my-auto"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
